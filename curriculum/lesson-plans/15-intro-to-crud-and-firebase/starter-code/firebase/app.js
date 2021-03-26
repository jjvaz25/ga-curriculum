// import { firebaseConfig } from './keys.js';
const firebaseConfig = {
  apiKey: "AIzaSyAEdWMNbYkILsr3Rit0saGiCktp4sSXYZc",
  authDomain: "test-50870.firebaseapp.com",
  projectId: "test-50870",
  storageBucket: "test-50870.appspot.com",
  messagingSenderId: "763344688782",
  appId: "1:763344688782:web:7e9393e48e77c73f62dbdf"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();



const getFanMessages = async () => {
  const data = await db.collection('messages').get();

  // transform to a more useful format
  // const messages = data.docs.map((doc) => {
  //   // console.log('doc.data()', doc.data());
  //   // below combines the document id with all properties returned by doc.data()
  //   return {
  //     id: doc.id,
  //     ...doc.data()
  //   };
  // });
  const messages = [];
  data.docs.forEach(doc => {
    messages.push({
      id: doc.id,
      ...doc.data()
    })
  });
  // console.log('messages', messages);
  return messages;
};

const render = async () => {
  const listContainer = document.getElementById('message-container');
  const messages = await getFanMessages();
  listContainer.innerHTML = '';

  messages.forEach((messageItem, i) => {
    listContainer.innerHTML += `<td>${messageItem.message}</td>
        <td>
          <i class="material-icons" class="upvote">thumb_up</i>
          <i class="material-icons" class="downvote">thumb_down</i>
          <i id="trash${i}" class="material-icons" class="delete" data-id=${messageItem.id}>delete</i>
        </td>`;
  });
}

function deleteMessage(id) {
  // find message whose objectId is equal to the id we're searching with
  return db.collection('messages').doc(id).delete();
}


const onLoadHandler = async () => {

  // getFanMessages();

  // click listener for submission
  document.getElementById('message-form').addEventListener('submit', (event) => {
    // by default a form submit reloads the DOM which will subsequently reload all our JS
    // to avoid this we preventDefault()
    event.preventDefault();

    const messageInput = document.getElementById('newmessage');

    db.collection("messages").add(
      {
        message: messageInput.value,
        votes: 0
      }
    ).then(() => {
      messageInput.value = '';
    });

    // this render after submit
    render();

  });
  


  // On first load
  await render();


  let deletes = document.querySelector('.delete');
  console.log(deletes);
  for (let i = 0; i < deletes.length; i++) {
    document.getElementById(`#trash${i}`).addEventListener('click', async () => {
      await deleteMessage(document.getElementById(`#trash${i}`).data.id)
      render();
    });
  }

};

// Wait for DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onLoadHandler);
} else {
  onLoadHandler();
}
