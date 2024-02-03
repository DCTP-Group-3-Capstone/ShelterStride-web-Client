import * as React from "react";
import "./Away.scss";

const Away = () => {
  const options = [
    { label: "Fruit" },
    { label: "Vegetable" },
    { label: "Meat" },
  ];

  const [value, setValue] = React.useState("meat");
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="ert">
      <div className={`divv ${isDropdownOpen ? 'open' : ''}`}>
        <select className="sell" value={value} onChange={handleChange}>
          {options.map((option) => (
            <option className="oop" key={option.label} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="dropdown-icon" onClick={toggleDropdown}>
          ▼
        </div>
      </div>

      <p>We eat {value}!</p>
    </div>
  );
};

export default Away;
