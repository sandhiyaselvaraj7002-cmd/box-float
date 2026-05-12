// Add your 4 photos and 4 one-line messages here
const memories = [
    { img: "IMG-20251118-WA0017.jpg", text: "Our favorite walk at Thiruverkadu ❤️" },
    { img: "IMG-20251122-WA0038.jpg", text: "first meet always special 🚌" },
    { img: "IMG-20260430-WA0006.jpg", text: "Memories from SA College days 🎓" },
    { img: "IMG-20251118-WA0024.jpg", text: "Happy Birthday, Mr. Vinoth! 🎂" }
];

function openGift() {
    document.getElementById('giftBox').classList.add('hidden');
    document.getElementById('memory-field').classList.remove('hidden');
    generate4Hearts();
}

function generate4Hearts() {
    const field = document.getElementById('memory-field');
    
    // NEW POSITIONS: These are pulled UP so all 4 fit on the screen at once
    const positions = [
        { top: '22%', left: '15%' }, // Top Left
        { top: '25%', left: '60%' }, // Top Right
        { top: '48%', left: '20%' }, // Middle Left
        { top: '52%', left: '65%' }  // Middle Right
    ];

    memories.forEach((memory, i) => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        
        heart.style.top = positions[i].top;
        heart.style.left = positions[i].left;
        heart.style.animationDelay = (i * 0.7) + 's';

        heart.onclick = () => {
            const modal = document.getElementById('memoryModal');
            const modalBody = document.getElementById('modalBody');
            
            modalBody.innerHTML = `
                <img src="${memory.img}" alt="Memory" style="width:100%; border-radius:12px; display:block; margin-bottom:15px;">
                <p style="margin:0; font-weight:600; color:#800f2f;">${memory.text}</p>
            `;
            
            modal.style.display = 'flex';
        };

        field.appendChild(heart);
    });
}

function closeModal() {
    document.getElementById('memoryModal').style.display = 'none';
}

window.onclick = (event) => {
    const modal = document.getElementById('memoryModal');
    if (event.target == modal) {
        closeModal();
    }
};
