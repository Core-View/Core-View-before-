import React, { useState } from 'react';
import './post_view.css'; // CSS 파일 import

const PostView = () => {
    // 서버에서 받아올 데이터는 일단 하드코딩된 변수로 저장
    const title = "헬로 월드가 안 나와요.";
    const likes = 42;
    const author = "홍길동";
    const content = `
        안녕하세요.
        Hello, World!

        #include <stdio.h>

    `.trim().split('\n'); // 줄 단위로 쪼개기

    const [feedback, setFeedback] = useState({});
    const [popup, setPopup] = useState({ show: false, line: null });

    const handleFeedbackClick = (lineIndex) => {
        setPopup({ show: true, line: lineIndex });
    };

    const handleFeedbackSubmit = (lineIndex, feedbackText) => {
        setFeedback({ ...feedback, [lineIndex]: feedbackText });
        setPopup({ show: false, line: null });
    };

    return (
        <div className="post-view">
            <h1 className="post-title">{title}</h1>
            <div className="post-meta">
                <span className="post-likes">좋아요 {likes}</span>
                <span className="post-author">{author}</span>
            </div>
            <div className="post-content">
                {content.map((line, index) => (
                    <div key={index} className="post-line">
                        <span>{line}</span>
                        <button className="feedback-button" onClick={() => handleFeedbackClick(index)}>피드백</button>
                        {feedback[index] && <div className="feedback-text">{feedback[index]}</div>}
                    </div>
                ))}
            </div>
            {popup.show && (
                <div className="popup">
                    <div className="popup-inner">
                        <textarea
                            rows="4"
                            placeholder="피드백을 남겨주세요."
                            defaultValue={feedback[popup.line] || ''}
                        />
                        <div className="popup-buttons">
                            <button onClick={() => setPopup({ show: false, line: null })}>취소</button>
                            <button
                                onClick={() => handleFeedbackSubmit(popup.line, document.querySelector('.popup textarea').value)}
                            >
                                제출
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostView;
