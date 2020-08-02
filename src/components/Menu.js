import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import * as loginActions from "./../actions/login.action";
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

const MenuA = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="focus:outline-none">
      <img 
        className="rounded-full w-12 h-12 border cursor-pointer"
        src="/test.png"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      />
        
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/profile">
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(loginActions.logout({ ...props }));
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};
export default withRouter(MenuA);
