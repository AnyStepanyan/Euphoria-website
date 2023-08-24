import React, { useState } from "react";
import {Container, CssBaseline, Avatar, Typography, FormControlLabel, Button, Checkbox, Grid, Link, makeStyles, Card, CardContent} from "@material-ui/core";
import { LockRounded } from "@material-ui/icons";
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator"

const Login = (props) => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleCheck = (event) => {
        setRememberMe(event.target.checked);
    }
    const handlerLogin = () => {

    }


    return (
        <Container component= "main" maxWidth = "xs">
            <Card className= {classes.card}>
                <CardContent>
                    <CssBaseline/>
                    <div className= {classes.paper}>
                        <Avatar className= {classes.avatar}>
                            <LockRounded/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign In 
                        </Typography>
                        <ValidatorForm 
                            onSubmit={handlerLogin}
                            onError={errors => {
                                for (const err of errors){
                                    console.log(err.props.errorMessages[0])
                                }
                            }}
                                className= {classes.form}>
                                <TextValidator
                                    variant = "outlined"
                                    margin = "normal"
                                    fullWidth
                                    label = "Email"
                                    onChange={handleEmail}
                                    name = "email"
                                    value={email}
                                    validators={["required", "isEmail"]}
                                    errorMessages={["this field is required", "email is not valid"]}
                                    autoComplete="off"
                                    />
                                <TextValidator
                                    variant = "outlined"
                                    margin = "normal"
                                    fullWidth
                                    label = "Password"
                                    type = "password"
                                    onChange={handlePassword}
                                    name = "password"
                                    value={password}
                                    validators={["required", "isEmail"]}
                                    errorMessages={["this field is required"]}
                                    autoComplete="off"
                                    />
                                <FormControlLabel 
                                    control={<Checkbox value = {rememberMe} onChange={(e) => handleCheck(e)} color="primary"/>}
                                    label = "Remember me"
                                />
                                <Button 
                                    type = "submit"
                                    fullWidth
                                    variant="contained"
                                    className= {classes.submit}
                                    >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item>
                                    <Link onClick= {props.toggle} className= {classes.pointer} variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                    </Grid>

                                </Grid>
                        </ValidatorForm>
                    </div>
                </CardContent>
            </Card>

        </Container>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection : "column",
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
        color: "#fff"
    },
    card: {
        marginTop: "60px",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "20px",
    },
    pointer: {
        cursor: "pointer",
        color: "red"
    }}));
export default Login;