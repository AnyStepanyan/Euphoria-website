import React, { useEffect, useState } from "react";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  Button,
  Grid,
  Link,
  makeStyles,
  Card,
  CardContent,
} from "@material-ui/core";
import { LockRounded } from "@material-ui/icons";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import fire from "../../helpers/db";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthErrorCodes, getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleSignUp = (data) => {
    console.log(data)
    const auth = getAuth(fire); // Initialize Firebase Authentication
            
            // Use the createUserWithEmailAndPassword function to create a new user
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                console.log(userCredential,"--userCredential")
                const user = userCredential.user;
                console.log("User registered:", user);
                
              })
      .catch((error) => {
        if(error.code === AuthErrorCodes.WEAK_PASSWORD ||
          error.code === AuthErrorCodes.INVALID_PASSWORD ||
          error.code === AuthErrorCodes.USER_DELETED){
          toast.error(error.message)
        }
        switch (error.code) {
          case "auth/email-already-in-use":
            toast.error(error.message);
            break;
          case "auth/invalid-email":
            toast.error(error.message);
            break;
          case "auth/weak-password":
            toast.error(error.message);
            break;
        }
      });
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== password) {
        return false;
      }
      return true;
    });
    return () => {
      ValidatorForm.removeValidationRule("isPasswordMatch");
    };
  }, [password]);

  return (
    <Container component="main" maxWidth="xs">
      <Card className={classes.card}>
        <CardContent>
          <ToastContainer />
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockRounded />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <ValidatorForm
               onSubmit={handleSignUp}
              onError={errors => {
                   for (const error of errors){
                   console.log(error.props.errorMessages[0])
                 }
             }}
              className={classes.form}
            >
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email"
                onChange={handleEmail}
                name="email"
                value={email}
                validators={["required", "isEmail"]}
                errorMessages={[
                  "this field is required",
                  "email is  not valid",
                ]}
                autoComplete="off"
              />
              <br />
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Password"
                onChange={handlePassword}
                name="password"
                type="password"
                value={password}
                validators={["required"]}
                errorMessages={["this field is required"]}
                autoComplete="off"
              />
              <TextValidator
                variant="outlined"
                fullWidth
                label="Confirm Password"
                onChange={handleConfirmPassword}
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                validators={["isPasswordMatch", "required"]}
                errorMessages={[
                  "password mismatches",
                  "this field is required",
                ]}
                autoComplete="off"
              />
              {/* <FormControlLabel 
                                    control={<Checkbox value = {rememberMe} onChange={(e) => handleCheck(e)} color="primary"/>}
                                    label = "Remember me"
                                /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  <Link
                    onClick={props.toggle}
                    className={classes.pointer}
                    variant="body2"
                  >
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </ValidatorForm>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    margin: theme.spacing(3, 0, 2),
    color: "#fff",
  },
  card: {
    marginTop: "60px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "20px",
  },
  pointer: {
    cursor: "pointer",
    color: "red",
  },
}));
export default SignUp;
