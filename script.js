const balloonColors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
const balloonsContainer = document.getElementById('balloons-container');

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    // Đặt màu ngẫu nhiên cho bóng bay
    const randomColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.style.backgroundColor = randomColor;

    // Đặt kích thước và vị trí ngẫu nhiên cho bóng bay
    const randomSize = Math.random() * 30 + 30;
    balloon.style.width = `${randomSize}px`;
    balloon.style.height = `${randomSize * 1.6}px`;

    const randomLeft = Math.random() * 100;
    balloon.style.left = `${randomLeft}%`;

    // Thời gian nổi ngẫu nhiên
    const randomDuration = Math.random() * 5 + 5;
    balloon.style.animationDuration = `${randomDuration}s`;

    balloonsContainer.appendChild(balloon);

    // Xóa bóng bay sau khi nổi lên khỏi màn hình
    setTimeout(() => {
        balloon.remove();
    }, randomDuration * 1000);
}

// Tạo bóng bay liên tục
setInterval(createBalloon, 500);
