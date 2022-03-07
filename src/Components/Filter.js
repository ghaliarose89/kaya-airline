import React from "react";
import '../Utils/filter.scss'
function Filter (props) {
const filters = [
    {
      id: "OW",
      label: "Oneworld"
    },
    {
      id: "ST",
      label: "Sky Team"
    },
    {
      id: "SA",
      label: "Star Alliance"
    }
  ];

  const handleChange = (e) => {
    const alliance = e.target.dataset.id;
    let newactiveAlliances = props.activeAlliances.filter(
      (item) => item !== alliance
    );
    if (e.target.checked) newactiveAlliances.push(alliance);
    props.onAllianceCheck(newactiveAlliances);
  };

  return (
    <div className="filter">
      <h4>Filter by Alliances</h4>
      <div className="checkboxes">
        {filters.map((filter) => (
          <label htmlFor={filter.id} key={filter.id}>
            <input
              id={filter.id}
              type="checkbox"
              data-id={filter.id}
              checked={props.activeAlliances.includes(filter.id)}
              onChange={handleChange}
            />
            {filter.label}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Filter;