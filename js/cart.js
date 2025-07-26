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
'Скарлет Мейяндекор': 'btn-82'
  
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
function increaseQuantity(index) {
  cart[index].quantity++;
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

function updateCartDisplay() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const countSpan = document.getElementById('cart-count');
  if (countSpan) countSpan.innerText = count;

  const list = document.getElementById('cart-list');
  if (list) {
    list.innerHTML = '';
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'cart-item';
      li.innerHTML = `
        ${item.name} — ${item.quantity} шт. 
        <button onclick="removeFromCart(${index})">−</button>
        <button onclick="increaseQuantity(${index})">+</button>
      `;
      list.appendChild(li);
    });
  }
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

  if (!name || !phone || !address) {
    alert("Будь ласка, заповніть усі поля!");
    return;
  }

  const orderText =
    "🛒 НОВЕ ЗАМОВЛЕННЯ:\n\n" +
    cart.map((item, i) => `${i + 1}. ${item.name} — ${item.quantity} шт.`).join('\n') +
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

