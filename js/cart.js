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
  
};
const productPrices = {
  'Транквіліті': 100,
  'Пілігрім': 100,
  'Грехам Томас': 100,
  'Графіня фон Харденберг': 100,
  'Александра оф Кент': 100,
  'Марія Магдалена': 100,
  'Дарк Леді': 100,
  'Принцеса Анна': 100,
  'Клер Остін': 100,
  'Крокус Роуз': 100,
  'Королева Швеції': 100,
  'Вінчестер Кафедрал': 100,
  'Манстед Вуд': 100,
  'Олівія Роуз': 100,
  'Шаріфа Асма': 100,
  'Строберрі Хілл': 100,
  'Кейра': 100,
  'Міранда': 100,
  'Абрахам Дербі': 100,
  'Джефф Гамільтон': 100,
  'Е Шропшир Лед': 100,
  'Ті Кліппер': 100,
  'Боскобель': 100,
  'Джеймс Гелвей': 100,
  'Бєатріс': 100,
  'Дарсі Бассел': 100,
  'Зе Принц': 100,
  'Леді оф Шалот': 100,
  'Голден Селебрейшн': 100,
  'Букет Парфе': 100,
  'Моцарт леди': 100,
  'Міднайт Блю': 100,
  'Моцарт': 100,
  'Айс оф зе Тайгер': 100,
  'Айс фо ю': 100,
  'Робін Гуд': 100,
  'Буллс Айс': 100,
  'Фейри': 100,
  'Зонненшарм': 100,
  'Сноу балєт': 100,
  'Пінк Просперіті': 100,
  'Скарлет Мейяндекор': 100,
  'Ред каскад': 100,
  'Джазз': 100,
  'Спрей Вікторія': 100,
  'Спрей Шайн': 100,
  'Спрей Ред Макарена': 100,
  'Сафіна': 100,
  'Каталіна': 100,
  'Алегрія': 100,
  'Апельсин': 100,
  'Ред Мікадо': 100,
  'Роуз': 100,
  'Оранж Бебі': 100,
  'Вайс роуз': 100,
  'Новаліс': 100,
  'Помпонелла': 100,
  'Ювілей принца Монако': 100,
  'Тера Лімбургія': 100,
  'Аріфа': 100,
  'Хані Діжон': 100,
  'Герцогиня Крістіна': 100,
  'Курфюстен Софи': 100,
  'Ангела': 100,
  'Леонардо да Вінчі': 100,
  'Вайт Леонардо да Вінчі': 100,
  'Ред Леонардо да Вінчі': 100,
  'Мінерва': 100,
  'Аспірин': 100,
  'Ізі даз Іт': 100,
  'Лав Сонг': 100,
  '4 Вітри': 100,
  'Блю фо Ю': 100,
  'Стефані Баронін цу Гутенберг': 100,
  'Тєррі Маркс': 100,
  'Френезі': 100,
  'Баронесса': 100,
  'Гранатовий Браслет': 100,
  'Лайон Роуз': 100,
  'Малікорн': 100
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
  // Обновляем счётчик товаров
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
const TELEGRAM_CHAT_ID = '521597324';

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

