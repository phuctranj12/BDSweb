import React from 'react';
import '../../styles/TeamMemberCard.css';
const TeamMemberCard = ({ name, role, image }) => {
    return (
        <div className="team-card">
            <img src={image} alt={name} className="team-image" />
            <h4 className="team-name">{name}</h4>
            <p className="team-role">{role}</p>
        </div>
    );
};

export default TeamMemberCard;