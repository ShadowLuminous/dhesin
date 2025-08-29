const poems = [
    /* TEMPLATE FOR POEMS {
        title: "THE NOW",
        date: "2025-06-13",
        content: `
I fear the future
Not because I don’t trust myself to harness my dreams
Not because I avoid all avenues of intimate connection
Not because I, as an absurdist, value the meaningless of life itself
But because there is no future
There is only the now
I breathe in the now 
I see the now
I feel the now
And beyond the now, there is only IF
IF I obsess over my ambitions, will I live out my dreams?
IF I expose my heart from its burrow, will I feel a connection?
IF I, as an explorer, will ever find meaning in life itself
Am I destined to see tomorrow?
Am I deserving to take this next breath?
Will I become hyper aware of every passing second
Wondering what could have been if I angled myself differently?
No
I angled this pen upon paper that came from the maker of my breath
The breath that carries me into tomorrow
The tomorrow that is my “future”
Do you see it?
There is only the now
The now is the future on a road travelled by the past
I feel peace, comfort, joy and excitement in the now
Why not savour
Why not forbid the existence of what if and have faith in what is
I fear the future
For it is a succubus that leeches on the now.
`
    }, */
    {
        title: "THE NOW",
        date: "2025-06-13",
        content: `
I fear the future
Not because I don’t trust myself to harness my dreams
Not because I avoid all avenues of intimate connection
Not because I, as an absurdist, value the meaningless of life itself
But because there is no future
There is only the now
I breathe in the now 
I see the now
I feel the now
And beyond the now, there is only IF
IF I obsess over my ambitions, will I live out my dreams?
IF I expose my heart from its burrow, will I feel a connection?
IF I, as an explorer, will ever find meaning in life itself
Am I destined to see tomorrow?
Am I deserving to take this next breath?
Will I become hyper aware of every passing second
Wondering what could have been if I angled myself differently?
No
I angled this pen upon paper that came from the maker of my breath
The breath that carries me into tomorrow
The tomorrow that is my “future”
Do you see it?
There is only the now
The now is the future on a road travelled by the past
I feel peace, comfort, joy and excitement in the now
Why not savour
Why not forbid the existence of what if and have faith in what is
I fear the future
For it is a succubus that leeches on the now.
`
    }
];

const poemContainer = document.getElementById('poem-container');
const searchInput = document.getElementById('search-input');
const dateFilter = document.getElementById('date-filter');
const clearFiltersButton = document.getElementById('clear-filters');

function typeWriterEffect(element, text, delay = 50) {
    let i = 0;
    element.innerHTML = ''; // Clear existing text
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, delay);
        }
    }
    typing();
}

function displayPoems(filteredPoems = poems) {
    poemContainer.innerHTML = '';
    if (filteredPoems.length === 0) {
        poemContainer.innerHTML = '<p style="text-align: center; color: #888;">No poems found matching your criteria.</p>';
        return;
    }

    filteredPoems.forEach((poem, index) => {
        const poemDiv = document.createElement('div');
        poemDiv.classList.add('poem');
        poemDiv.style.opacity = 0;
        poemDiv.style.transform = 'translateY(20px)';

        const title = document.createElement('h2');
        title.textContent = poem.title;

        const dateSpan = document.createElement('span');
        dateSpan.classList.add('poem-date');
        dateSpan.textContent = ` (${poem.date})`; // Display date next to title

        title.appendChild(dateSpan);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('poem-content');

        poemDiv.appendChild(title);
        poemDiv.appendChild(contentDiv);
        poemContainer.appendChild(poemDiv);

        setTimeout(() => {
            poemDiv.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            poemDiv.style.opacity = 1;
            poemDiv.style.transform = 'translateY(0)';

            const lines = poem.content.split('\n');
            lines.forEach((line, lineIndex) => {
                const p = document.createElement('p');
                contentDiv.appendChild(p);
                setTimeout(() => {
                    typeWriterEffect(p, line);
                }, lineIndex * 100); // Staggered line by line typing
            });

        }, index * 500);
    });
}

function filterPoems() {
    const searchTerm = searchInput.value.toLowerCase();
    const filterDate = dateFilter.value;

    let filtered = poems.filter(poem => {
        const matchesTitle = poem.title.toLowerCase().includes(searchTerm);
        const matchesDate = filterDate ? poem.date === filterDate : true;
        return matchesTitle && matchesDate;
    });

    displayPoems(filtered);
}

searchInput.addEventListener('input', filterPoems);
dateFilter.addEventListener('change', filterPoems);
clearFiltersButton.addEventListener('click', () => {
    searchInput.value = '';
    dateFilter.value = '';
    displayPoems();
});

document.addEventListener('DOMContentLoaded', () => {
    displayPoems();
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

// Smooth scrolling (optional, if more navigation is added)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
