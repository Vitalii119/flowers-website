let cart = JSON.parse(localStorage.getItem('cart')) || [];

const productButtonMap = {
    'Транквіліті': 'btn-1',
    'Пілігрім': 'btn-2',
    'Грехам Томас': 'btn-3',
    'Графіня фон Харденберг': 'btn-4',
    'Александра оф Кент': 'btn-5',
    'Марія Магдалена': 'btn-6',
    'Дарк Леді': 'btn-7',
    'Принцеса Анна': 'btn-8',
    'Клер Остін': 'btn-9',
    'Крокус Роуз': 'btn-10',
    'Королева Швеції': 'btn-11',
    'Вінчестер Кафедрал': 'btn-12',
    'Манстед Вуд': 'btn-13',
    'Олівія Роуз': 'btn-14',
    'Шаріфа Асма': 'btn-15',
    'Строберрі Хілл': 'btn-16',
    'Кейра': 'btn-17',
    'Міранда': 'btn-18',
    'Абрахам Дербі': 'btn-19',
    'Джефф Гамільтон': 'btn-20',
    'Е Шропшир Лед': 'btn-21',
    'Ті Кліппер': 'btn-22',
    'Боскобель': 'btn-23',
    'Джеймс Гелвей': 'btn-24',
    'Бєатріс': 'btn-25',
    'Дарсі Бассел': 'btn-26',
    'Зе Принц': 'btn-27',
    'Леді оф Шалот': 'btn-28',
    'Голден Селебрейшн': 'btn-29',
    'Букет Парфе': 'btn-30',
    'Моцарт леди': 'btn-31',
    'Міднайт Блю': 'btn-32',
    'Моцарт': 'btn-33',
    'Айс оф зе Тайгер': 'btn-34',
    'Айс фо ю': 'btn-35',
    'Робін Гуд': 'btn-36',
    'Буллс Айс': 'btn-37',
    'Фейри': 'btn-38',
    'Зонненшарм': 'btn-39',
    'Сноу балєт': 'btn-40',
    'Пінк Просперіті': 'btn-41',
    'Скарлет Мейяндекор': 'btn-42',
    'Ред каскад': 'btn-43',
    'Джазз': 'btn-44',
    'Спрей Вікторія': 'btn-45',
    'Спрей Шайн': 'btn-46',
    'Спрей Ред Макарена': 'btn-47',
    'Сафіна': 'btn-48',
    'Каталіна': 'btn-49',
    'Алегрія': 'btn-50',
    'Апельсин': 'btn-51',
    'Ред Мікадо': 'btn-52',
    'Фикшн': 'btn-53',
    'Оранж Бебі': 'btn-54',
    'Кронпринцес Мері': 'btn-55',
    'Новаліс': 'btn-56',
    'Помпонелла': 'btn-57',
    'Ювілей принца Монако': 'btn-58',
    'Тера Лімбургія': 'btn-59',
    'Аріфа': 'btn-60',
    'Хані Діжон': 'btn-61',
    'Герцогиня Крістіна': 'btn-62',
    'Курфюстен Софи': 'btn-63',
    'Ангела': 'btn-64',
    'Леонардо да Вінчі': 'btn-65',
    'Вайт Леонардо да Вінчі': 'btn-66',
    'Ред Леонардо да Вінчі': 'btn-67',
    'Мінерва': 'btn-68',
    'Аспірин': 'btn-69',
    'Ізі даз Іт': 'btn-70',
    'Лав Сонг': 'btn-71',
    '4 Вітри': 'btn-72',
    'Блю фо Ю': 'btn-73',
    'Стефані Баронін цу Гутенберг': 'btn-74',
    'Тєррі Маркс': 'btn-75',
    'Джазз': 'btn-76',
    'Френезі': 'btn-77',
    'Баронесса': 'btn-78',
    'Гранатовий Браслет': 'btn-79',
    'Лайон Роуз': 'btn-80',
    'Малікорн': 'btn-81',
    'Скарлет Мейяндекор': 'btn-82',
    'Парпл Лодж': 'btn-83',
    'Емілєн Гійо':'btn-84',
    'Бель де Сагоза': 'btn-85',
    'Моцарт': 'btn-86',
    'Нельсон Монфор': 'btn-87',
    'Бельведер': 'btn-88',
    'Ані Дюпрей': 'btn-89',
    'Пр. Сібілла де Люксембург': 'btn-90',
    'Йоханн Вольфганг Гете': 'btn-91',
    'Лоран Каброль': 'btn-92',
    'Французька Сукня': 'btn-93',
    'Корал Желе': 'btn-94',
    'Шахерезада': 'btn-95',
    'Йолі': 'btn-96',
    'Дафна':'btn-97',
    'Еврідіка': 'btn-98',
    'Сесіль де Воланж': 'btn-99',
    'Плум': 'btn-100',
    'Міябі':'btn-101',
    'Місс Піггі': 'btn-102',
    'Боінг': 'btn-103',
    'Рене Гасінні': 'btn-104',
    'Міріам': 'btn-105',
    'Глорія Дей': 'btn-106',
    'Касіма': 'btn-107',
    'Черрі Бренді': 'btn-108',
    'Сеньоріта': 'btn-109',
    'с': 'btn-110',
    'Рафаелло': 'btn-111',
    'Аскот Нью': 'btn-112',
    'Плантен ун Блюмен': 'btn-113',
    'Біг Парпл': 'btn-114',
    'Талєя': 'btn-115',
    'Етруска': 'btn-116',
    'Малікорн': 'btn-117',
    'Парадіз': 'btn-118',
    'Готча': 'btn-119',
    'Замок Шеверні': 'btn-120',
    'Хартс': 'btn-121',
    'Амнезія': 'btn-122',
    'Білий шоколад': 'btn-123',
    'Тоффі': 'btn-124',
    'Чандос Бюті': 'btn-125',
    'Ред Піано': 'btn-126',
    'Лімонад': 'btn-127',
    'Ель Торо': 'btn-128',
    'Незнайомка': 'btn-129',
    'Луї де Фюнес': 'btn-130',
    'Експлорер': 'btn-131',
    'Кофе Латте': 'btn-132',
    'Омаж а Барбара': 'btn-133',
    'Сорбет Аваланч': 'btn-134',
    'Дольче Віта': 'btn-135',
    'Блек Меджик': 'btn-136',
    'Блек Баккара': 'btn-137',
    'Латін леді': 'btn-138',
    'Едді Мітчелл': 'btn-139',
    'Августа Луїза': 'btn-140',
    'Капучіно': 'btn-141',
    'Діп Парпл': 'btn-142',
    'Каренза': 'btn-143',
    'Аква': 'btn-144',
    'Хай Меджик': 'btn-145',
    'Графіня Діана': 'btn-146',
    'Пінк Інтуішн': 'btn-147',
    'Ля Перла': 'btn-148',
    'Блю Парфюм': 'btn-149',
    'Ранок Парижу': 'btn-150',
    'Фантазія Мондіаль': 'btn-151',
    'Сноу Балєт': 'btn-152',
    'Пінк Просперіті': 'btn-153',
    'Ред каскад': 'btn-154',
    'Полька': 'btn-155',
    'Шнеєвальцер': 'btn-156',
    'Ельф': 'btn-157',
    'Сірано де Бержерак': 'btn-158',
    'Полуплетиса Блю Босс': 'btn-159',
    'Пєр де Ронсар': 'btn-160',
    'Нахема': 'btn-161',
    'Сезар': 'btn-162',
    'Декор Арлєкін': 'btn-163',
    'Сахара': 'btn-164',
    'Голден Шоверс': 'btn-165',
    'Парад': 'btn-166',
    'Лагуна': 'btn-167',
    'Вартбург': 'btn-168',
    'Айсберг': 'btn-169',
    'Ноу Нєйм': 'btn-170',
    'Нахеглют': 'btn-171',
    'Жоашен Дю Бєллє': 'btn-172',
    'Поезія': 'btn-173',
    'Мімі Еден': 'btn-174',
    'Санта Барбара': 'btn-175',
    'Піммс': 'btn-176',
    'Принцеса Сакура': 'btn-177',
    'Теракота': 'btn-178',
    'Андре Бріше / Імка Маріна': 'btn-179',
    'Даймонд Айс': 'btn-180',
    'Боніка': 'btn-181',
    'Хом енд Гарден': 'btn-182',
    'Принцеса Айко': 'btn-183',
    'Цумугі': 'btn-184',
    'Принцеса Міюкі': 'btn-185',
    'Хевенлі Пінк': 'btn-186',
    'Тіара': 'btn-187',
    'Рокстар': 'btn-188',
    'Бременські музиканти': 'btn-189',
    'Астрід Графін фон Харденберг': 'btn-190',
    'Спіріт оф Фрідом': 'btn-191',
    'La Reine Victoria': 'btn-192',
    



};

  
const productPrices = {
    'Транквіліті': 130,
    'Пілігрім': 130,
    'Грехам Томас': 130,
    'Графіня фон Харденберг': 130,
    'Александра оф Кент': 130,
    'Марія Магдалена': 130,
    'Дарк Леді': 130,
    'Принцеса Анна': 130,
    'Клер Остін': 130,
    'Крокус Роуз': 130,
    'Королева Швеції': 130,
    'Вінчестер Кафедрал': 130,
    'Манстед Вуд': 130,
    'Олівія Роуз': 130,
    'Шаріфа Асма': 130,
    'Строберрі Хілл': 130,
    'Кейра': 130,
    'Міранда': 130,
    'Абрахам Дербі': 130,
    'Джефф Гамільтон': 130,
    'Е Шропшир Лед': 130,
    'Ті Кліппер': 130,
    'Боскобель': 130,
    'Джеймс Гелвей': 130,
    'Бєатріс': 130,
    'Дарсі Бассел': 130,
    'Зе Принц': 130,
    'Леді оф Шалот': 130,
    'Голден Селебрейшн': 130,
    'Букет Парфе': 130,
    'Моцарт леди': 130,
    'Міднайт Блю': 130,
    'Моцарт': 130,
    'Айс оф зе Тайгер': 130,
    'Айс фо ю': 130,
    'Робін Гуд': 130,
    'Буллс Айс': 130,
    'Фейри': 130,
    'Зонненшарм': 130,
    'Сноу балєт': 130,
    'Пінк Просперіті': 130,
    'Скарлет Мейяндекор': 130,
    'Ред каскад': 130,
    'Джазз': 130,
    'Спрей Вікторія': 130,
    'Спрей Шайн': 130,
    'Спрей Ред Макарена': 130,
    'Сафіна': 130,
    'Каталіна': 130,
    'Алегрія': 130,
    'Апельсин': 130,
    'Ред Мікадо': 130,
    'Фикшн': 130,
    'Оранж Бебі': 130,
    'Кронпринцес Мері': 130,
    'Новаліс': 130,
    'Помпонелла': 130,
    'Ювілей принца Монако': 130,
    'Тера Лімбургія': 130,
    'Аріфа': 130,
    'Хані Діжон': 130,
    'Герцогиня Крістіна': 130,
    'Курфюстен Софи': 130,
    'Ангела': 130,
    'Леонардо да Вінчі': 130,
    'Вайт Леонардо да Вінчі': 130,
    'Ред Леонардо да Вінчі': 130,
    'Мінерва': 130,
    'Аспірин': 130,
    'Ізі даз Іт': 130,
    'Лав Сонг': 130,
    '4 Вітри': 130,
    'Блю фо Ю': 130,
    'Стефані Баронін цу Гутенберг': 130,
    'Тєррі Маркс': 130,
    'Френезі': 130,
    'Баронесса': 130,
    'Гранатовий Браслет': 130,
    'Лайон Роуз': 130,
    'Малікорн': 130,
    'Парпл Лодж':130,
    'Емілєн Гійо':130,
    'Бель де Сагоза': 130,
    'Моцарт': 130,
    'Нельсон Монфор': 130,
    'Бельведер': 130,
    'Ані Дюпрей': 130,
    'Пр. Сібілла де Люксембург': 130,
    'Йоханн Вольфганг Гете': 130,
    'Лоран Каброль': 130,
    'Французька Сукня': 150,
    'Корал Желе': 150,
    'Шахерезада': 150,
    'Йолі': 150,
    'Дафна': 150,
    'Еврідіка': 150,
    'Сесіль де Воланж': 150,
    'Плум': 150,
    'Міябі': 150,
    'Місс Піггі': 130,
    'Боінг': 130,
    'Рене Гасінні': 130,
    'Міріам': 130,
    'Глорія Дей': 130,
    'Касіма': 130,
    'Черрі Бренді': 130,
    'Сеньоріта': 130,
    'Кєріо': 130,
    'Рафаелло': 130,
    'Аскот Нью': 130,
    'Плантен ун Блюмен': 130,
    'Біг Парпл': 130,
    'Талєя': 130,
    'Етруска': 130,
    'Малікорн': 130,
    'Парадіз': 130,
    'Готча': 130,
    'Замок Шеверні': 130,
    'Хартс': 130,
    'Амнезія': 130,
    'Білий шоколад': 130,
    'Тоффі': 130,
    'Чандос Бюті': 130,
    'Ред Піано': 130,
    'Лімонад': 130,
    'Ель Торо': 130,
    'Незнайомка': 130,
    'Луї де Фюнес': 130,
    'Експлорер': 130,
    'Кофе Латте': 130,
    'Омаж а Барбара': 130,
    'Сорбет Аваланч': 130,
    'Дольче Віта': 130,
    'Блек Меджик': 130,
    'Блек Баккара': 130,
    'Латін леді': 130,
    'Едді Мітчелл': 130,
    'Августа Луїза': 130,
    'Капучіно': 130,
    'Діп Парпл': 130,
    'Каренза': 130,
    'Аква': 130,
    'Хай Меджик': 130,
    'Графіня Діана': 130,
    'Пінк Інтуішн': 130,
    'Ля Перла': 130,
    'Блю Парфюм': 130,
    'Ранок Парижу': 130,
    'Фантазія Мондіаль': 130,
    'Сноу Балєт': 130,
    'Пінк Просперіті': 130,
    'Ред каскад': 130,
    'Полька': 130,
    'Шнеєвальцер': 130,
    'Ельф': 130,
    'Сірано де Бержерак': 130,
    'Полуплетиса Блю Босс': 130,
    'Пєр де Ронсар': 130,
    'Нахема': 130,
    'Сезар': 130,
    'Декор Арлєкін': 130,
    'Сахара': 130,
    'Голден Шоверс': 130,
    'Парад': 130,
    'Лагуна': 130,
    'Вартбург': 130,
    'Айсберг': 130,
    'Ноу Нєйм': 130,
    'Нахеглют': 130,
    'Жоашен Дю Бєллє': 130,
    'Поезія': 130,
    'Мімі Еден': 130,
    'Санта Барбара': 130,
    'Піммс': 130,
    'Принцеса Сакура': 130,
    'Теракота': 130,
    'Андре Бріше / Імка Маріна': 130,
    'Даймонд Айс': 130,
    'Боніка': 130,
    'Хом енд Гарден': 130,
    'Принцеса Айко': 150,
    'Цумугі': 150,
    'Принцеса Міюкі': 150,
    'Хевенлі Пінк': 150,
    'Тіара': 130,
    'Рокстар': 130,
    'Бременські музиканти': 150,
    'Астрід Графін фон Харденберг': 150
    'Спіріт оф Фрідом': 130,
    'La Reine Victoria': 150,

};

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productName, buttonId) {
  const existingItem = cart.find(item => item.name === productName);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name: productName, quantity: 1 });

    // меняем текст кнопки
    const btn = document.getElementById(buttonId);
    if (btn) {
      btn.textContent = 'В кошику ✅';
      btn.disabled = true;
    }
  }
  saveCart();
  updateCartDisplay();
}
function increaseQuantity(index, amount = 1) {
  if (!cart[index]) return;
  cart[index].quantity += amount;
  saveCart();
  updateCartDisplay();
}

function removeQuantity(index, amount) {
  if (!cart[index]) return;

  cart[index].quantity -= amount;
  if (cart[index].quantity <= 0) {
  const removedItem = cart[index].name;
  const buttonId = productButtonMap[removedItem];
  if (buttonId) {
    const btn = document.getElementById(buttonId);
    if (btn) {
      btn.innerText = 'У кошик';
      btn.disabled = false;
      btn.onclick = function () {
        addToCart(removedItem, buttonId);
      };
    }
  }
  cart.splice(index, 1);
}

  saveCart();
  updateCartDisplay();
}

function removeFromCart(index) {
  const name = cart[index].name;
  const buttonId = productButtonMap[name];

  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
    if (buttonId) {
      const btn = document.getElementById(buttonId);
      if (btn) {
        btn.textContent = 'У кошик';
        btn.disabled = false;
      }
    }
  }

  saveCart();
  updateCartDisplay();
}
function calculateTotal() {
  return cart.reduce((total, item) => {
    const price = productPrices[item.name] || 0;
    return total + price * item.quantity;
  }, 0);
}

function updateCartDisplay() {
  // Обновляем счётчик товаров\
  document.getElementById('cart-count').innerText =
    cart.reduce((total, item) => total + item.quantity, 0);

  const list = document.getElementById('cart-list');
  let totalSum = 0;

  if (list) {
    list.innerHTML = '';

    cart.forEach((item, index) => {
      const price = productPrices[item.name] || 0;
      const itemTotal = item.quantity * price;
      totalSum += itemTotal;

      const li = document.createElement('li');
      li.className = 'cart-item';
      li.innerHTML = `
        ${item.name} — ${item.quantity} шт. x ${price} грн = ${itemTotal} грн 
        <button onclick="removeFromCart(${index})">−1</button>
        <button onclick="removeQuantity(${index}, 10)">−10</button>
        <button onclick="increaseQuantity(${index})">+1</button>
        <button onclick="increaseQuantity(${index}, 10)">+10</button>
      `;
      list.appendChild(li);
    });

    const totalLi = document.createElement('li');
    totalLi.innerHTML = `<strong>💵 Сума до сплати: ${totalSum} грн</strong>`;
    list.appendChild(totalLi);
  }
}


function addQuantity(index, amount) {
  cart[index].quantity += amount;
  saveCart();
  updateCartDisplay();
}

function toggleCart() {
  const cartDiv = document.getElementById('cart');
  if (cartDiv) {
    const visible = cartDiv.style.display === 'block';
    cartDiv.style.display = visible ? 'none' : 'block';
    localStorage.setItem('cartVisible', visible ? 'false' : 'true');
  }
}

const TELEGRAM_TOKEN = '8421402819:AAHXroHNrZDJ7HHPQaAhKrVUXfnxphxXu_M';
const TELEGRAM_CHAT_ID = '1921334468';


function submitOrder() {
  if (cart.length === 0) {
    alert("Ваша корзина пуста!");
    return;
  }

  const name = document.getElementById("customer-name").value.trim();
  const phone = document.getElementById("customer-phone").value.trim();
  const address = document.getElementById("customer-address").value.trim();
  const totalSum = cart.reduce((sum, item) => {
  const price = productPrices[item.name] || 0;
  return sum + item.quantity * price;
}, 0);

  if (!name || !phone || !address) {
    alert("Будь ласка, заповніть усі поля!");
    return;
  }

  const orderText =
    "🛒 НОВЕ ЗАМОВЛЕННЯ:\n\n" +
    cart.map((item, i) => `${i + 1}. ${item.name} — ${item.quantity} шт.`).join('\n') +
    `\n\n💵 Сума до сплати: ${totalSum} грн` +
    "\n\n👤 Ім'я: " + name +
    "\n📞 Телефон: " + phone +
    "\n🏠 Адреса: " + address;

  fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: orderText,
    }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert("✅ Замовлення відправлено!");
        cart = [];
        saveCart();
        updateCartDisplay();
        toggleCart();
        document.getElementById("customer-name").value = "";
        document.getElementById("customer-phone").value = "";
        document.getElementById("customer-address").value = "";
      } else {
        alert("❌ Помилка відправки. Спробуйте пізніше.");
      }

      localStorage.removeItem('cart');
    });
}

document.addEventListener("DOMContentLoaded", function () {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  updateCartDisplay();

  cart.forEach(item => {
    const btnId = productButtonMap[item.name];
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.textContent = 'В кошику ✅';
      btn.disabled = true;
    }
  });

  // Скрыть корзину при загрузке
  const cartDiv = document.getElementById('cart');
  if (cartDiv) {
    cartDiv.style.display = 'none';
    localStorage.setItem('cartVisible', 'false');
  }
});

