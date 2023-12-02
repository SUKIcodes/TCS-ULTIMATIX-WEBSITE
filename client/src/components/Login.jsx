import React from "react";
import "../styles/login.scss";
import leftLogo from "../assets/ultimatix_left.png";
import logo from "../assets/ultimatix_logo.png";
import { Button, TextField } from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import profile from "../assets/profile_lock.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="main">
      <div className="left">
        <img src={leftLogo} alt="leftlogo" />
      </div>
      <div className="right">
        <img
          src={logo}
          alt="logo"
          style={{ marginBottom: "220px", marginLeft: "-20px" }}
        />

        <div className="details">
          <TextField
            label="Username"
            variant="standard"
            sx={{ width: "16rem", textAlign: "center" }}
          />
          <span>
            <VisibilityOffOutlinedIcon
              fontSize="large"
              sx={{
                color: "gray",
                fontSize: 30,
                marginLeft: "-40px",
                marginRight: "10px",
              }}
            />
          </span>
          <span>
            <img
              src={profile}
              width="55px"
              title="You can now log on using Ultimatix Personalised username"
              alt="profile"
            />
          </span>
        </div>
        <div
          className="enter"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "150px",
          }}
        >
          <Button
            sx={{
              textTransform: "capitalize",
              backgroundColor: "#234EB5",
              fontSize: "16px",
              fontWeight: "400",
              color: "white",
              padding: "5px",
              width: "12rem",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
            variant="contained"
            size="large"
          >
            Proceed
          </Button>
          <Link
            style={{
              fontWeight: "600",
              fontSize: "12px",
              color: "#234EB5",
              marginTop: "6px",
            }}
            to="/"
          >
            Need Help?
          </Link>

          <p
            className="terms"
            style={{
              fontSize: "12px",
              color: "#234EB5",
              fontWeight: "bold",
              marginTop: "60px",
              wordSpacing: "2px",
            }}
          >
            Terms and Conditions
          </p>
          <p
            className="copyright"
            style={{
              fontSize: "12px",
              marginTop: "3px",
              fontWeight: "600",
              wordSpacing: "2px",
            }}
          >
            Copyright © 2022 Tata Consultancy Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
