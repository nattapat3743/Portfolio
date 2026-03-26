const scroller = document.getElementById('cardScroller');
const btnLeft  = document.getElementById('scrollLeft');
const btnRight = document.getElementById('scrollRight');
const scrollAmount = 452; // card width (420) + gap (32)

btnLeft.addEventListener('click', () => {
    scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
    scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});
// PDF Modal
function openPDF(filePath, title) {
    const modal   = document.getElementById('pdfModal');
    const modalBox = document.getElementById('pdfModalBox');
    const viewer  = document.getElementById('pdfViewer');
    const titleEl = document.getElementById('pdfTitle');
    const dlBtn   = document.getElementById('pdfDownload');
    const imgEl   = document.getElementById('modalImage');

    // ซ่อนรูปภาพถ้ามี แสดง iframe
    if (imgEl) {
        imgEl.style.display = 'none';
        imgEl.src = '';
    }
    viewer.style.display = '';
    viewer.src = filePath;

    titleEl.textContent = title;
    dlBtn.href = filePath;

    modal.classList.remove('opacity-0', 'pointer-events-none');
    modalBox.classList.remove('scale-95');
    document.body.style.overflow = 'hidden';
}

function closePDF() {
    const modal    = document.getElementById('pdfModal');
    const modalBox = document.getElementById('pdfModalBox');
    const viewer   = document.getElementById('pdfViewer');

    modal.classList.add('opacity-0', 'pointer-events-none');
    modalBox.classList.add('scale-95');
    document.body.style.overflow = '';

    setTimeout(() => { viewer.src = ''; }, 300);
}

// ปิด modal เมื่อคลิกพื้นหลัง
document.getElementById('pdfModal').addEventListener('click', function (e) {
    if (e.target === this) closePDF();
});

// ปิด modal เมื่อกด ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePDF();
});

// ปิดเมื่อคลิกพื้นหลัง
document.getElementById('videoModal').addEventListener('click', function(e) {
    if (e.target === this) closeVideo();
});

// ปิดเมื่อกด ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideo();
});


function openImage(src, title) {
    const modal    = document.getElementById('pdfModal');
    const modalBox = document.getElementById('pdfModalBox');
    const viewer   = document.getElementById('pdfViewer');
    const titleEl  = document.getElementById('pdfTitle');
    const dlBtn    = document.getElementById('pdfDownload');

    // ซ่อน iframe แสดงรูป
    viewer.style.display = 'none';
    viewer.src = '';

    let imgEl = document.getElementById('modalImage');
    if (!imgEl) {
        imgEl = document.createElement('img');
        imgEl.id = 'modalImage';
        imgEl.className = 'w-full h-full object-contain bg-black';
        viewer.parentNode.insertBefore(imgEl, viewer.nextSibling);
    }
    imgEl.src = src;
    imgEl.style.display = 'block';

    titleEl.textContent = title; // ใช้ชื่อที่ส่งมา
    dlBtn.href = src;

    modal.classList.remove('opacity-0', 'pointer-events-none');
    modalBox.classList.remove('scale-95');
    document.body.style.overflow = 'hidden';
}
