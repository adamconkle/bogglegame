function myFunction() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Get all table cells
    const cells = document.querySelectorAll('#table th');

    // Loop through each cell and assign a random letter
    cells.forEach(cell => {
        const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        cell.innerHTML = randomLetter;
    });
}
