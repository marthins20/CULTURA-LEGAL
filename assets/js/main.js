// --- CHATBOX ---
function toggleChat() {
  const chatbox = document.getElementById('chatbox');
  const chatBtn = document.getElementById('chat-open-btn');
  if (chatbox.style.display === 'flex') {
    chatbox.style.display = 'none';
    chatBtn.style.display = 'block';
  } else {
    chatbox.style.display = 'flex';
    chatBtn.style.display = 'none';
    setTimeout(()=>{document.getElementById('chat-input-field').focus();},200);
  }
}
window.toggleChat = toggleChat;

window.sendMsg = function () {
  const input = document.getElementById('chat-input-field');
  const chatBody = document.getElementById('chat-body');
  if (input.value.trim() === "") return false;
  let userMsg = document.createElement('div');
  userMsg.className = 'msg-user';
  userMsg.innerText = input.value;
  chatBody.appendChild(userMsg);
  setTimeout(() => {
    let botMsg = document.createElement('div');
    botMsg.className = 'msg-bot';
    botMsg.innerText = "¡Gracias por contactarnos! Un asesor te responderá pronto o escríbenos a WhatsApp: 300 123 4567.";
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 900);
  chatBody.scrollTop = chatBody.scrollHeight;
  input.value = "";
  return false;
};
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('chat-close').onclick = toggleChat;
});

// --- REGISTRO DE INTERESADOS ---
window.registrarPersona = function () {
  const nombre = document.getElementById('reg-nombre').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const tel = document.getElementById('reg-telefono').value.trim();
  const respuesta = document.getElementById('reg-respuesta');
  if (!nombre || !email || !tel) {
    respuesta.textContent = "Por favor completa todos los campos.";
    return false;
  }
  respuesta.textContent = "¡Gracias, " + nombre + "! Pronto recibirás información en tu correo.";
  document.getElementById('form-registro').reset();
  setTimeout(() => { respuesta.textContent = ""; }, 4000);
  return false;
};
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.carrusel-principal', {
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 160,
      modifier: 1.25,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: { enabled: true, },
  });
});