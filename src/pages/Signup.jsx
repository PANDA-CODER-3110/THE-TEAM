import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImg from "../components/BackgroundImg";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config,";

export default function SignUp() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    // console.log(formValues);
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container showPassword={showPassword}>
      <BackgroundImg />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>The thrill of streaming has never changed</h1>
            <h4>Don't let it.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div className="text flex column">
            <div className=" column">
              <div className="form">
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
                {showPassword && (
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
                )}
                {!showPassword && (
                  <button onClick={() => setShowPassword(true)}>
                    Get Started
                  </button>
                )}
              </div>
            </div>
            <div className="column">
              <button onClick={handleSignIn}>Sign Up</button>
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
    .body {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          width: 40vw;
          /* padding: 0 25rem; */
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 50vw;
        input {
          color: black;
          border: 1px solid black;
          padding: 1.5rem;
          font-size: 1.2rem;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.25rem 2rem;
          background-color: #ffe695;
          border: none;
          cursor: pointer;
          color: #000000e1;
          border-radius: 0rem;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 1rem 2rem;
        background-color: #ffe695;
        border: none;
        cursor: pointer;
        color: #000000e1;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;
// #e50914
