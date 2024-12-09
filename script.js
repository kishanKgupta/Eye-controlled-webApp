document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('colorButton');
    let buttonBounds = button.getBoundingClientRect();
    
    webgazer.setGazeListener((data, elapsedTime) => {
        if (data == null) {
            return;
            
        }
        
        const { x, y } = data;
        
        if (
            x >= buttonBounds.left && 
            x <= buttonBounds.right && 
            y >= buttonBounds.top && 
            y <= buttonBounds.bottom
        ) {
            document.body.style.backgroundColor = getRandomColor();
        }
    }).begin();
    
    window.onresize = () => {
        buttonBounds = button.getBoundingClientRect();
    };

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
