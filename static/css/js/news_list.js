document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('load-more-btn');
    let currentPage = 1;

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            currentPage += 1;
            fetch(`?page=${currentPage}`, {
                method: 'GET',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    const newsList = document.getElementById('news-list');
                    const parser = new DOMParser();
                    const newItems = parser.parseFromString(data.html, 'text/html').querySelectorAll('#news-list li');

                    
                    newItems.forEach((item) => {
                        newsList.appendChild(item);
                    });

                    
                    if (!data.has_next_page) {
                        loadMoreBtn.style.display = 'none';
                    }
                })
                .catch((error) => {
                    console.error('Error loading more news:', error);
                });
        });
    }
});
