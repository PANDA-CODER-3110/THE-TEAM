// import { async } from "@firebase/util";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImg from "../components/BackgroundImg";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config,";
import "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import GoogleButton from "react-google-button";

export default function Login() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleLogIn = async () => {
    // console.log(formValues);
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    await signInWithRedirect(firebaseAuth, provider);
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  

  

  return (
    <Container>
      <BackgroundImg />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              
              <h2>Login</h2>
            </div>
            <div className="container flex column">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              <button onClick={handleLogIn}>Log In</button>
              <p>OR</p>
              <GoogleButton onClick={signInWithGoogle} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    
    .form-container {
      gap: 2rem;
      height: 85vh;
      
      .form {
        padding: 2rem;
        background-color: white;
        border-radius: 0.75rem;
        width: 9cm;
        gap: 2rem;
        color: white;
        .title{
          h2{
            color: black;
          }
        }
        .container {
          gap: 2rem;
          input {
            align-self: center;
            padding: 0.5rem 1rem;
            width: 15vw;
          }
          p {
            align-self: center;
          }
          button {
            padding: 0.5rem 1rem;
            align-self: center;
            width: 15vw;
            background-color: #ffe695;
            border: none;
            cursor: pointer;
            color: #000000e1;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.15rem;
          }
        }
      }
    }
  }
`;
