document.addEventListener('DOMContentLoaded', function () {
    const categories = {
      'WOMENS': ['Clothing', 'Lingerie & Nightwear', 'Dresses', 'Footwear', 'Accessories', 'Beauty', 'Brands', 'Collections', 'Sale & Offers', 'Clearance'],
      'MENS': ['Clothing', 'Suits & Formalwear', 'Nightwear & Underwear', 'Footwear', 'Accessories', 'Brands', 'Collections', 'Sale & Offers'],
      'KIDS': ['Girls', 'Boys', 'Baby', 'School Uniform', 'Footwear', 'Character, Toys & Games', 'Accessories', 'Brands', 'Collections', 'Sale & Offers'],
      'HOME': ['Home Accessories', 'Bedding', 'Kitchen & Dining', 'Bathroom', 'Christmas', 'Lightning', 'Furniture', 'Travel', 'Sale & Offers', 'Shop By Room'],
      'SALE': ['Womens Sale & Offers', 'Mens Sale & Offers', 'Kids Sale & Offers', 'Home Sale & Offers'],
      'CHRISTMAS': ['Christmas Trees & Decorations', 'Christmas Clothing', 'Christmas Homeware', 'Christmas Gifts', 'Christmas Wrapping'],
      'AUTUMN': ['Halloween', 'Autumn Fashion', 'Cosy Home', 'Coats & Jackets', 'Boots', 'Lightning'],
    };
  
    const mainMenuLinks = document.querySelectorAll('.nav-menu a');
    const submenu = document.querySelector('.submenu ul');
  
    // Функция для обновления подменю
    function updateSubmenu(subCategories) {
      submenu.innerHTML = ''; // Очистим текущее подменю
  
      subCategories.forEach(subCategory => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = subCategory;
        a.href = '#'; // Вы можете здесь подставить реальный URL
  
        // Добавим классы для подкатегорий
        a.classList.add('subcategory-link');
  
        li.appendChild(a);
        submenu.appendChild(li);
      });
  
      // Привязываем события к новым элементам подменю
      addSubmenuEventListeners();
    }
  
    // Добавляем события для hover и active на подкатегории
    function addSubmenuEventListeners() {
      const submenuLinks = document.querySelectorAll('.subcategory-link');
  
      submenuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
          event.preventDefault(); // Остановим стандартное поведение ссылок
  
          // Убираем класс active у всех подкатегорий
          submenuLinks.forEach(link => link.classList.remove('active'));
  
          // Добавляем класс active на выбранную подкатегорию
          this.classList.add('active');
  
          // Пример перенаправления на новую страницу (можно убрать, если не нужно)
          const subCategoryURL = `/${this.textContent.toLowerCase().replace(/\s+/g, '-')}`;
          window.location.href = subCategoryURL;
        });
  
        // Добавляем hover эффект
        link.addEventListener('mouseenter', function () {
          this.classList.add('hover');
        });
  
        link.addEventListener('mouseleave', function () {
          this.classList.remove('hover');
        });
      });
    }
  
    // Добавляем событие на элементы основного меню
    mainMenuLinks.forEach(menuItem => {
      menuItem.addEventListener('click', function (event) {
        event.preventDefault(); // Останавливаем переход по ссылке
  
        // Убираем класс active у всех элементов основного меню
        mainMenuLinks.forEach(link => link.classList.remove('active'));
  
        // Добавляем класс active на выбранный элемент
        this.classList.add('active');
  
        // Обновляем подменю в зависимости от выбранной категории
        const selectedCategory = this.textContent;
        updateSubmenu(categories[selectedCategory] || []);
      });
  
      // Добавляем hover эффект для основного меню
      menuItem.addEventListener('mouseenter', function () {
        this.classList.add('hover');
      });
  
      menuItem.addEventListener('mouseleave', function () {
        this.classList.remove('hover');
      });
    });
  
    // Изначально показываем подменю для первой категории
    updateSubmenu(categories['WOMENS']);
  });
  