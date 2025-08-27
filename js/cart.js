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
    'Роуз': 'btn-53',
    'Оранж Бебі': 'btn-54',
    'Вайс роуз': 'btn-55',
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
    'Кєріо': 'btn-110',
    'Рафаелло': 'btn-111',
    'Аскот Нью': 'btn-112',
    'Плантен ун Блюмен': 'btn-113',
    'Біг Парпл': 'btn-114',
    'Талєя': 'btn-115',
    'Етруска': 'btn-116',
    'Малікорн': 'btn-117',
    'Парадіз': 'btn-118',
    '№№№': 'btn-119',
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
    'ТвН': 'btn-133',
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
    'Зонненшарм': 'btn-151',
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
    

  
};
const productPrices = {
    'Транквіліті': 120,
    'Пілігрім': 120,
    'Грехам Томас': 120,
    'Графіня фон Харденберг': 120,
    'Александра оф Кент': 120,
    'Марія Магдалена': 120,
    'Дарк Леді': 120,
    'Принцеса Анна': 120,
    'Клер Остін': 120,
    'Крокус Роуз': 120,
    'Королева Швеції': 120,
    'Вінчестер Кафедрал': 120,
    'Манстед Вуд': 120,
    'Олівія Роуз': 120,
    'Шаріфа Асма': 120,
    'Строберрі Хілл': 120,
    'Кейра': 120,
    'Міранда': 120,
    'Абрахам Дербі': 120,
    'Джефф Гамільтон': 120,
    'Е Шропшир Лед': 120,
    'Ті Кліппер': 120,
    'Боскобель': 120,
    'Джеймс Гелвей': 120,
    'Бєатріс': 120,
    'Дарсі Бассел': 120,
    'Зе Принц': 120,
    'Леді оф Шалот': 120,
    'Голден Селебрейшн': 120,
    'Букет Парфе': 120,
    'Моцарт леди': 120,
    'Міднайт Блю': 120,
    'Моцарт': 120,
    'Айс оф зе Тайгер': 120,
    'Айс фо ю': 120,
    'Робін Гуд': 120,
    'Буллс Айс': 120,
    'Фейри': 120,
    'Зонненшарм': 120,
    'Сноу балєт': 120,
    'Пінк Просперіті': 120,
    'Скарлет Мейяндекор': 120,
    'Ред каскад': 120,
    'Джазз': 120,
    'Спрей Вікторія': 120,
    'Спрей Шайн': 120,
    'Спрей Ред Макарена': 120,
    'Сафіна': 120,
    'Каталіна': 120,
    'Алегрія': 120,
    'Апельсин': 120,
    'Ред Мікадо': 120,
    'Роуз': 120,
    'Оранж Бебі': 120,
    'Вайс роуз': 120,
    'Новаліс': 120,
    'Помпонелла': 120,
    'Ювілей принца Монако': 120,
    'Тера Лімбургія': 120,
    'Аріфа': 120,
    'Хані Діжон': 120,
    'Герцогиня Крістіна': 120,
    'Курфюстен Софи': 120,
    'Ангела': 120,
    'Леонардо да Вінчі': 120,
    'Вайт Леонардо да Вінчі': 120,
    'Ред Леонардо да Вінчі': 120,
    'Мінерва': 120,
    'Аспірин': 120,
    'Ізі даз Іт': 120,
    'Лав Сонг': 120,
    '4 Вітри': 120,
    'Блю фо Ю': 120,
    'Стефані Баронін цу Гутенберг': 120,
    'Тєррі Маркс': 120,
    'Френезі': 120,
    'Баронесса': 120,
    'Гранатовий Браслет': 120,
    'Лайон Роуз': 120,
    'Малікорн': 120,
    'Парпл Лодж':120,
    'Емілєн Гійо':120,
    'Бель де Сагоза': 120,
    'Моцарт': 120,
    'Нельсон Монфор': 120,
    'Бельведер': 120,
    'Ані Дюпрей': 120,
    'Пр. Сібілла де Люксембург': 120,
    'Йоханн Вольфганг Гете': 120,
    'Лоран Каброль': 120,
    'Французька Сукня': 130,
    'Корал Желе': 130,
    'Шахерезада': 130,
    'Йолі': 130,
    'Дафна': 130,
    'Еврідіка': 130,
    'Сесіль де Воланж': 130,
    'Плум': 130,
    'Міябі': 130,
    'Місс Піггі': 120,
    'Боінг': 120,
    'Рене Гасінні': 120,
    'Міріам': 120,
    'Глорія Дей': 120,
    'Касіма': 120,
    'Черрі Бренді': 120,
    'Сеньоріта': 120,
    'Кєріо': 120,
    'Рафаелло': 120,
    'Аскот Нью': 120,
    'Плантен ун Блюмен': 120,
    'Біг Парпл': 120,
    'Талєя': 120,
    'Етруска': 120,
    'Малікорн': 120,
    'Парадіз': 120,
    '№№№': 120,
    'Замок Шеверні': 120,
    'Хартс': 120,
    'Амнезія': 120,
    'Білий шоколад': 120,
    'Тоффі': 120,
    'Чандос Бюті': 120,
    'Ред Піано': 120,
    'Лімонад': 120,
    'Ель Торо': 120,
    'Незнайомка': 120,
    'Луї де Фюнес': 120,
    'Експлорер': 120,
    'Кофе Латте': 120,
    'ТвН': 120,
    'Сорбет Аваланч': 120,
    'Дольче Віта': 120,
    'Блек Меджик': 120,
    'Блек Баккара': 120,
    'Латін леді': 120,
    'Едді Мітчелл': 120,
    'Августа Луїза': 120,
    'Капучіно': 120,
    'Діп Парпл': 120,
    'Каренза': 120,
    'Аква': 120,
    'Хай Меджик': 120,
    'Графіня Діана': 120,
    'Пінк Інтуішн': 120,
    'Ля Перла': 120,
    'Блю Парфюм': 120,
    'Ранок Парижу': 120,
    'Зонненшарм': 120,
    'Сноу Балєт': 120,
    'Пінк Просперіті': 120,
    'Ред каскад': 120,
    'Полька': 120,
    'Шнеєвальцер': 120,
    'Ельф': 120,
    'Сірано де Бержерак': 120,
    'Полуплетиса Блю Босс': 120,
    'Пєр де Ронсар': 120,
    'Нахема': 120,
    'Сезар': 120,
    'Декор Арлєкін': 120,
    'Сахара': 120,
    'Голден Шоверс': 120,
    'Парад': 120,
    'Лагуна': 120,
    'Вартбург': 120,
    'Айсберг': 120,
    'Ноу Нєйм': 120,
    'Нахеглют': 120,


  
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

