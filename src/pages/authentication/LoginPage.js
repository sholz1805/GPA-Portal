import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepMeLoggedIn, setKeepMeLoggedIn] = useState(false);
  const [errors, setErrors] = useState({ emailOrPhone: "", password: "" });
  const route = useNavigate();

  const validateEmailOrPhone = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{11}$/;
    if (!emailPattern.test(value) && !phonePattern.test(value)) {
      return "Please enter a valid email address or phone number";
    }
    return "";
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const emailOrPhoneError = validateEmailOrPhone(emailOrPhone);
    if (emailOrPhoneError) {
      setErrors({ ...errors, emailOrPhone: emailOrPhoneError });
      return;
    }
    console.log({
      emailOrPhone,
      password,
      keepMeLoggedIn,
    });
    route("/overview");
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        backgroundImage: `url('/images/focus.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "5%",
          transform: "translateY(-50%)",
          width: "75%",
          maxWidth: "33%",
          padding: "1rem",
        }}
      >
        <Card
          style={{
            padding: "0.5rem",
            width: "350px",
            height: "440px",
            borderRadius: "20px",
          }}
        >
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                  gap: "10px",
                }}
              >
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  style={{ width: "40px" }}
                />
                <Typography
                  variant="p"
                  component="div"
                  sx={{ fontSize: "16px", fontWeight: "500" }}
                >
                  GPA Portal
                </Typography>
              </div>
            </div>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "600", textAlign: "center" }}
              gutterBottom
            >
              Log In
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleLogin}>
              <div>
                <p style={{ fontSize: "14px", fontWeight: "500" }}>
                  Your email address or number
                </p>
                <TextField
                  label="Enter your email address or number"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  value={emailOrPhone}
                  onChange={(e) => {
                    setEmailOrPhone(e.target.value);
                    setErrors({ ...errors, emailOrPhone: "" });
                  }}
                  error={!!errors.emailOrPhone}
                  InputLabelProps={{ style: { fontSize: "12px" } }}
                />
                {errors.emailOrPhone && (
                  <Typography
                    variant="body2"
                    color="error"
                    style={{ fontSize: "12px" }}
                  >
                    {errors.emailOrPhone}
                  </Typography>
                )}
              </div>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    marginTop: "0.5rem",
                  }}
                >
                  Your password
                </p>
                <TextField
                  label="Enter your password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputLabelProps={{ style: { fontSize: "12px" } }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          sx={{
                            fontSize: "12px",
                            color: "#2D56A8",
                            fontWeight: "500",
                            borderRadius: "2px",
                            marginRight: "5px",
                            background: "#EAEEF6",
                            height: "30px",
                          }}
                        >
                          {showPassword ? "Hide" : "Show"}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "20px",
                  marginBottom: "1rem",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={keepMeLoggedIn}
                      onChange={(e) => setKeepMeLoggedIn(e.target.checked)}
                      name="keepMeLoggedIn"
                      color="primary"
                    />
                  }
                  label={
                    <span style={{ fontSize: "12px" }}>Keep me logged in</span>
                  }
                />
                <a
                  href="/"
                  style={{
                    fontSize: "12px",
                    color: "#3f51b5",
                    textDecoration: "underline",
                    fontWeight: "500",
                  }}
                >
                  Forgot Password?
                </a>
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ textTransform: "none", marginTop: "1rem" }}
              >
                Log In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
