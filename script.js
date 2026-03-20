/* Developed by Hussein - 2026 */

// النص مطابق للفيديو تماماً
const greetingText = "عيد فطر مبارك يا سعيدة الحظ ✨.. العيد لا الجمعة ولا السبت، العيد هو يوم رؤيتكِ بخير دائماً. ❤️";
let charIndex = 0;

function startExperience() {
    hideAll();
    const s2 = document.getElementById('step2');
    s2.classList.remove('hidden');
    s2.classList.add('fade-in');
    
    // إطلاق انفجار خفيف عند فتح الرسالة أيضاً (اختياري)
    confetti({ particleCount: 50, spread: 50, origin: { y: 0.8 } });
    
    typeWriter();
}

// تأثير الكتابة "حرفاً بحرف"
function typeWriter() {
    const display = document.getElementById("typewriter");
    if (charIndex < greetingText.length) {
        display.innerHTML += greetingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 80); 
    } else {
        const btn = document.getElementById("nextBtn");
        btn.classList.remove('hidden');
        btn.classList.add('fade-in');
    }
}

function showMusicPage() {
    hideAll();
    const s3 = document.getElementById('step3');
    s3.classList.remove('hidden');
    s3.classList.add('fade-in');
    
    const audio = document.getElementById('bgMusic');
    if(audio) audio.play();
    
    // الانفجار الاحتفالي الكبير عند صفحة الموسيقى
    triggerConfetti();
}

function hideAll() {
    document.querySelectorAll('.card').forEach(c => c.classList.add('hidden'));
}

function triggerConfetti() {
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff2e63', '#ffffff', '#ff9a9e']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff2e63', '#ffffff', '#ff9a9e']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
}

// دالة العناصر المتساقطة (قلوب، هلال، نجوم)
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // إضافة الهلال والنجوم مع القلوب
    const shapes = ['❤️', '✨', '🌙', '⭐'];
    heart.innerText = shapes[Math.floor(Math.random() * shapes.length)];
    
    heart.style.left = Math.random() * 100 + "vw";
    const duration = Math.random() * 3 + 4;
    heart.style.animationDuration = duration + "s";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    
    document.getElementById('particles-js').appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, duration * 1000);
}

setInterval(createHeart, 400);
