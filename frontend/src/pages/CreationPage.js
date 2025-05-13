import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import owlImage from '../assets/owl_hi.png';
import './CreationPage.css';

export default function CreationPage() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const goToLearning = () => {
    navigate('/studyMain');
  };

  return (
    <div className="creation-page">
      
      <div className="content">
        <p className="message">
          답변해주신 내용을 바탕으로 동화를 생성하고 있어요!
          <br />
          잠시만 기다려주세요.
        </p>

        <img src={owlImage} alt="부엉이" className="owl-image" />

        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <button className="start-button" onClick={goToLearning}>
            학습 시작
          </button>
        )}
      </div>
    </div>
  );
}
