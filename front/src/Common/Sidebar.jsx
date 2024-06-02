import React, { useState, useEffect } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.closest(".sidebar") === null) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="rank">
        <div>기여도 순위</div>
        <ul className="rankcode">
          <li>1. 이브라히모비치</li>
          <li>2. 이브라히모비치</li>
          <li>3. 이브라히모비치</li>
          <li>4. 이브라히모비치</li>
          <li>5. 이브라히모비치</li>
          <li>6. 이브라히모비치</li>
          <li>7. 이브라히모비치</li>
          <li>8. 이브라히모비치</li>
          <li>9. 이브라히모비치</li>
          <li>10. 이브라히모비치</li>
        </ul>
      </div>
      <span className="clicker" onClick={toggleSidebar}>
        X
      </span>
    </div>
  );
};

export default Sidebar;
