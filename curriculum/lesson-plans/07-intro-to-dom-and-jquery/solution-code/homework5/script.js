for (let i = 100; 0 < i; i--) {
    if (i === 1) {
        $('body').append(`
            <ul>
                <li>${i} bottle of beer on the wall,</li>
                <li>${i} bottle of beer!</li>
                <li>Take one down,</li>
                <li>Pass it around,</li>
                <li>No more bottles of beer on the wall!</li>
            </ul>
        `);
    } else {
        $('body').append(`
            <ul>
                <li>${i} bottles of beer on the wall,</li>
                <li>${i} bottles of beer!</li>
                <li>Take one down,</li>
                <li>Pass it around,</li>
                <li>${i - 1} bottles of beer on the wall!</li>
            </ul>
        `);
    }
}