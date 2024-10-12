// Переменные для работы с товарами
let productsLoaded = 0; // Количество загруженных товаров
const productsPerLoad = 24; // Количество товаров для загрузки за раз

// Селектор для контейнера товаров
const productGrid = document.getElementById('product-grid');
const loading = document.getElementById('loading');

// Функция для создания карточки товара
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    // Картинка товара
    const img = document.createElement('img');
    img.src = product.image_url;
    img.alt = product.name;

    // Название товара
    const name = document.createElement('div');
    name.classList.add('product-name');
    name.textContent = product.name;

    // Цена товара
    const price = document.createElement('div');
    price.classList.add('product-price');
    price.textContent = `$${product.price}`;

    // Добавляем элементы в карточку
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);

    return card;
}

// Функция для загрузки товаров из JSON
async function loadProducts() {
    try {
        // Запрос на API для получения списка товаров
        const response = await fetch(`${window.location.origin}/api/getProductsList?type=womens`);
        const products = await response.json();

        loadMoreProducts(products); // Загружаем первые 24 товара
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

// Функция для отображения следующей порции товаров
function loadMoreProducts(products) {
    loading.style.display = 'block'; // Показываем прелоадер

    setTimeout(() => {
        const nextProducts = products.slice(productsLoaded, productsLoaded + productsPerLoad);

        nextProducts.forEach(product => {
            const productCard = createProductCard(product);
            productGrid.appendChild(productCard);
        });

        productsLoaded += productsPerLoad;
        loading.style.display = 'none'; // Скрываем прелоадер

        // Если все товары загружены, убираем прелоадер
        if (productsLoaded >= products.length) {
            window.removeEventListener('scroll', handleScroll);
        }
    }, 500); // Имитация загрузки
}

// Обработчик прокрутки
function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadMoreProducts();
    }
}

// Инициализация загрузки товаров и скролла
window.addEventListener('DOMContentLoaded', loadProducts);
window.addEventListener('scroll', handleScroll);