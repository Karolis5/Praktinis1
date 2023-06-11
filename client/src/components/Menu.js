import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [menuTitle, setMenuTitle] = useState("");
  const [menuItems, setMenuItems] = useState([]);

  const handleAddItem = () => {
    if (menuTitle.trim() !== "") {
      setMenuItems([...menuItems, menuTitle]);
      setMenuTitle("");
    }
  };

  const handleEditItem = (index) => {
    const newTitle = prompt(
      "Enter new title for this menu item:",
      menuItems[index]
    );
    if (newTitle !== null && newTitle.trim() !== "") {
      const newMenuItems = [...menuItems];
      newMenuItems[index] = newTitle;
      setMenuItems(newMenuItems);
    }
  };

  const handleRemoveItem = (index) => {
    const newMenuItems = [...menuItems];
    newMenuItems.splice(index, 1);
    setMenuItems(newMenuItems);
  };

  return (
    <div className="menu-container">
      <h5>Add a Menu</h5>
      <div className="add-item-container">
        <input
          type="text"
          value={menuTitle}
          onChange={(event) => setMenuTitle(event.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <h5>Menu Items</h5>
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={`/menu/${item}`}>{item}</Link>
            <button onClick={() => handleEditItem(index)}>Edit</button>
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;