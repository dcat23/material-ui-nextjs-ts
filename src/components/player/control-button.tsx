import React from 'react';
import {BottomNavigationAction, Tooltip} from "@mui/material";

interface ControlButtonProps {
  onClick?: () => void;
  icon?: React.JSX.Element;
  label?: string;
}

const ControlButton: React.FC<ControlButtonProps> = ({ onClick, icon, label }) => {
  return (
    <Tooltip title={label || ""}>
      <BottomNavigationAction onClick={onClick} label={label || ""} icon={icon} />
    </Tooltip>
  );
};

export default ControlButton;