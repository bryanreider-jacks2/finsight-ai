const listItems = document.querySelectorAll('#featureList li');
const featureBlocks = document.querySelectorAll('.feature-block');

listItems.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');

        featureBlocks.forEach(block => {
            block.classList.remove('active');
        });

        document.getElementById(target).classList.add('active');
    });
});