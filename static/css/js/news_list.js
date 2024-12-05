document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('load-more-btn');
    let currentPage = 1;

    if (loadMoreBtn) {
        console.log("Load More button detected"); 
        loadMoreBtn.addEventListener('click', () => {
            currentPage += 1;
            console.log(`Fetching page ${currentPage}`); 

            fetch(`?page=${currentPage}`, {
                method: 'GET',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
            })
                .then((response) => {
                    console.log("Received response:", response); 
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.text();
                })
                .then((data) => {
                    console.log("Received data:", data); 

                    const parser = new DOMParser();
                    const doc = parser.parseFromString(data, 'text/html');
                    const newItems = doc.querySelectorAll('#news-list li');
                    const newsList = document.getElementById('news-list');

                    if (!newsList) {
                        console.error("News list not found in DOM"); 
                        return;
                    }

                    newItems.forEach((item) => {
                        newsList.appendChild(item);
                    });

                    const newLoadMoreBtn = doc.querySelector('#load-more-btn');
                    if (!newLoadMoreBtn) {
                        console.log("No more pages to load, hiding button"); 
                        loadMoreBtn.style.display = 'none';
                    }
                })
                .catch((error) => console.error('Error fetching more news:', error));
        });
    } else {
        console.error("Load More button not found");  
    }
});
