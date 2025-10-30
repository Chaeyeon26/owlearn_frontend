import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginProfile.module.css";
import defaultAvatar from "../assets/owl_hi.png";
import parentIcon from "../assets/parentModeLogo.png";

function ProfileSelectionPage() {
  const navigate = useNavigate();
  const [children, setChildren] = useState([]);

  // localStorage에서 자녀 정보 불러오기
  useEffect(() => {
    const savedChildren = localStorage.getItem("childProfiles");
    if (savedChildren) {
      setChildren(JSON.parse(savedChildren));
    }
  }, []);

  // 자녀 선택시 studyMain 이동 + 선택한 자녀 정보 저장
  const handleChildSelect = (child) => {
    localStorage.setItem("selectedChild", JSON.stringify(child));
    navigate("/studyMain");
  };

  // 학부모 관리 모드
  const handleParentMode = () => {
    navigate("/parentMode");
  };

  // 자녀 추가
  const handleAddChild = () => {
    // const name = prompt("새 자녀의 이름을 입력하세요:");
    // if (name) {
    //   const newChild = {
    //     id: children.length + 1, // 👈 순번 기반 ID
    //     name,
    //     avatar: defaultAvatar,
    //   };
    //   const updatedChildren = [...children, newChild];
    //   setChildren(updatedChildren);
    //   localStorage.setItem("childProfiles", JSON.stringify(updatedChildren));
    // }
    navigate("/addProfile");
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>프로필 선택</h1>
        <button className={styles.parentButton} onClick={handleParentMode}>
          <img
            src={parentIcon}
            alt="부모 아이콘"
            className={styles.parentIcon}
          />
          학부모 관리 모드
        </button>
      </div>

      <div className={styles.cardContainer}>
        {children.map((child) => (
          <div key={child.id} className={styles.card}>
            <img
              src={child.avatar}
              alt={`${child.name} 아바타`}
              className={styles.avatar}
            />
            <div className={styles.name}>{child.name}</div>
            <button
              className={styles.selectButton}
              onClick={() => handleChildSelect(child)}
            >
              선택
            </button>
          </div>
        ))}

        <div className={styles.cardAdd} onClick={handleAddChild}>
          <span className={styles.plus}>+</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileSelectionPage;
