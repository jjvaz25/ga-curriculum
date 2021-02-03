// **Assignment 1: 99 Bottles of Beer**
// - Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can [find the lyrics here](https://lyricsplayground.com/alpha/songs/numbers/99bottlesofbeeronthewall.html). Do not worry about spelling out the numbers, use actual numbers (100, 99, 98...).
// - Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").

// One-hundred bottles of beer on the wall,
// One-hundred bottles of beer!
// Take one down,
// Pass it around,
// Ninety-nine bottles of beer on the wall!

for (let i = 100; 0 < i; i--) {
    if (i === 1) {
        console.log(`
            ${i} bottle of beer on the wall,
            ${i} bottle of beer!
            Take one down,
            Pass it around,
            No more bottles of beer on the wall!
        `);
    } else {
        console.log(`
            ${i} bottles of beer on the wall,
            ${i} bottles of beer!
            Take one down,
            Pass it around,
            ${i - 1} bottles of beer on the wall!
        `);
    }
}