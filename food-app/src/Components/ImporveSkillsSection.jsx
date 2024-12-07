import React from "react";

function ImporveSkillsSection() {
  const list = [
    "Learn new recepies",
    "Experiment with food",
    "Write your own recepies",
    "Know nutritions facts",
    "Get Cooking tips",
    "Get ranked",
  ];

  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src="/img/gallery/img_10.jpg" alt="" />
      </div>
      <div className="col typography">
        <h1 className="title">Improve Your Culinary Skills</h1>
        {list.map((item, index) => (
          <p key={index} className="skill-item">
            {item}
          </p>
        ))}
        <button className="btn">SignUp Now</button>
      </div>
    </div>
  );
}

export default ImporveSkillsSection;
