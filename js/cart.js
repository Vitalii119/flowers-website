

let cart = JSON.parse(localStorage.getItem('cart')) || [];


function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productName) {
  const existingItem = cart.find(item => item.name === productName);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name: productName, quantity: 1 });
  }
  saveCart();
  updateCartDisplay();
}

function removeFromCart(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartDisplay();
}

function updateCartDisplay() {
  document.getElementById('cart-count').innerText =
    cart.reduce((total, item) => total + item.quantity, 0);

  const list = document.getElementById('cart-list');
  if (list) {
    list.innerHTML = '';
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'cart-item';
      li.innerHTML = `
        ${item.name} — ${item.quantity} шт.
        <button onclick="decreaseQuantity(${index})">−</button>
        <button onclick="increaseQuantity(${index})">+</button>
      `;
      list.appendChild(li);
    });
  }
}
function increaseQuantity(index) {
  cart[index].quantity++;
  saveCart();
  updateCartDisplay();
}

function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartDisplay();
}

function toggleCart() {
  const cartDiv = document.getElementById('cart');
  const isVisible = cartDiv.style.display === 'block';

  if (isVisible) {
    cartDiv.style.display = 'none';
    localStorage.setItem('cartVisible', 'false');
  } else {
    cartDiv.style.display = 'block';
    localStorage.setItem('cartVisible', 'true');
  }
}

const TELEGRAM_TOKEN = '8421402819:AAHXroHNrZDJ7HHPQaAhKrVUXfnxphxXu_M';
const TELEGRAM_CHAT_ID = '521597324';

function submitOrder() {
  // Проверка: корзина пуста
  if (cart.length === 0) {
    alert("🛒 Ваша корзина порожня! Додайте товари перед замовленням.");
    return;
  }

  // Получаем значения из формы
  const name = document.getElementById("customer-name").value.trim();
  const phone = document.getElementById("customer-phone").value.trim();
  const address = document.getElementById("customer-address").value.trim();

  // Проверка: имя, телефон, адрес
  if (!name || !phone || !address) {
    alert("📋 Будь ласка, заповніть усі поля (Ім’я, Телефон, Адреса)!");
    return;
  }

  // Формируем текст заказа
  const orderText =
    "🛒 НОВЕ ЗАМОВЛЕННЯ:\n\n" +
    cart.map((item, i) => `${i + 1}. ${item.name} — ${item.quantity} шт.`).join('\n') +
    "\n\n👤 Ім'я: " + name +
    "\n📞 Телефон: " + phone +
    "\n🏠 Адреса: " + address;

  // Отправка в Telegram
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
        alert("✅ Замовлення надіслано!");
        cart = [];
        saveCart();
        updateCartDisplay();
        toggleCart();

        // Очистим форму
        document.getElementById("customer-name").value = "";
        document.getElementById("customer-phone").value = "";
        document.getElementById("customer-address").value = "";

        // Очистим корзину из localStorage
        localStorage.removeItem('cart');
      } else {
        alert("❌ Помилка при відправці. Спробуйте пізніше.");
      }
    });
}

// При загрузке страницы восстановим корзину и обновим отображение
document.addEventListener("DOMContentLoaded", function () {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  updateCartDisplay();

  // Показываем или скрываем корзину в зависимости от прошлого состояния
  const cartVisible = localStorage.getItem('cartVisible');
  const cartDiv = document.getElementById('cart');
  if (cartVisible === 'true') {
    cartDiv.style.display = 'block';
  } else {
    cartDiv.style.display = 'none';
  }
});