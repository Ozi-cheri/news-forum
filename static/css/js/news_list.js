const loadMoreBtn = document.getElementById('load-more-btn');
let currentPage = 1;

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        currentPage += 1;
        fetch(`?page=${currentPage}`)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const newItems = doc.querySelectorAll('#news-list li');
                const newsList = document.getElementById('news-list');

                newItems.forEach(item => {
                    newsList.appendChild(item);
                });

                const newLoadMoreBtn = doc.querySelector('#load-more-btn');
                if (!newLoadMoreBtn) {
                    loadMoreBtn.style.display = 'none';
                }
            })
            .catch(error => console.error('Error fetching more news:', error));
    });
}
