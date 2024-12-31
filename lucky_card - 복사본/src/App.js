import React, { useState } from 'react';
import './App.css';

const cards = [
    "001.png", "002.png", "003.png", "004.png", "005.png",
    "006.png", "007.png", "008.png", "009.png", "010.png",
    "011.png", "012.png", "013.png", "014.png"
];

function App() {
    const [selectedCard, setSelectedCard] = useState(null);

    const showLuckyCard = (luckyNumber) => {
        if (luckyNumber >= 1 && luckyNumber <= 100) {
            const randomIndex = Math.floor(Math.random() * cards.length);
            setSelectedCard(cards[randomIndex]);
        } else {
            alert("1~100 사이의 숫자를 입력해주세요!");
        }
    };

    const shareToInstagram = () => {
        const imageUrl = `${window.location.origin}/images/${selectedCard}`;
        const intentUrl = `https://www.instagram.com/create/story/?background_image_url=${encodeURIComponent(imageUrl)}`;
        window.open(intentUrl, '_blank');
    };

    return (
        <div className="App">
            <link href="https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap" rel="stylesheet" />
            {!selectedCard ? (
                <div className="input-page">
                    <h1>2025년 나의 행운은?</h1>
                    <p>나의 행운을 담을 숫자를 <br />1~100 중 선택하세요</p>
                    <input
                        type="number"
                        id="luckyNumber"
                        placeholder="입력"
                        min="1"
                        max="100"
                        className="input-field"
                    />
                    <button
                        className="round-button"
                        onClick={() => {
                            const luckyNumber = document.getElementById('luckyNumber').value;
                            showLuckyCard(luckyNumber);
                        }}
                    >
                        행운 보기
                    </button>
                </div>
            ) : (
                <div className="result-page">
                    <h2 className="result-title">당신의 행운 부적은</h2>
                    <img
                        src={`images/${selectedCard}`}
                        alt="행운 부적"
                        className="lucky-card"
                    />
                    <a
                        href={`images/${selectedCard}`}
                        download="행운부적.png"
                        className="download-button"
                    >
                        부적 저장하기
                    </a>
                   
                    <button onClick={() => setSelectedCard(null)}>
                        다시 시도하기
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
