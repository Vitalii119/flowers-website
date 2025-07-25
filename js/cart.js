

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
      li.innerHTML = `${item.name} — ${item.quantity} шт. 
        <button onclick="removeFromCart(${index})">−</button>`;
      list.appendChild(li);
    });
  }
}

function toggleCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.style.display = (cartDiv.style.display === 'none') ? 'block' : 'none';
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
    headers: {
      'Content-Type': 'application/json',
    },
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
        updateCartDisplay();
        toggleCart();
        // Очистим форму
        document.getElementById("customer-name").value = "";
        document.getElementById("customer-phone").value = "";
        document.getElementById("customer-address").value = "";
      } else {
        alert("❌ Помилка відправки. Спробуйте пізніше.");
      }
      
      localStorage.removeItem('cart');
    });
}
// При загрузке страницы восстановим корзину и обновим отображение
document.addEventListener("DOMContentLoaded", function () {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  updateCartDisplay();
});