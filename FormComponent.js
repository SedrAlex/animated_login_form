 import React, { useState } from 'react'
 import styled, { keyframes } from "styled-components";
 const move = keyframes`
0%{
    opacity:0;
}
95%{
    opacity:1;
}
`;

 const BackgroundBox = styled.div`
 background-color: #faeda9;
 height: 50vh;
 width: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 15rem auto;
 position: absolute;
 left:90px;

 border-radius: 23px;
 border: 1px solid #e8bb3d ;

 .text1 {
   z-index: ${(props) => (props.clicked ? "-700" : "700")};
   transform: ${(props) =>
     props.clicked ? "translateX(0)" : "translateX(70%)"};
   transition: transform 1s ease-in-out;
   animation: ${(props) => (props.clicked ? move : "none")} 1.5s;
 }

 .text2 {
   z-index: ${(props) => (props.clicked ? "700" : "-700")};
   animation: ${(props) => (props.clicked ? "none" : move)} 1.5s;
   transform: ${(props) =>
     props.clicked ? "translateX(-100%)" : "translateX(0%)"};
   transition: transform 1s ease-in-out;
 }
   
 .signin {
   position: absolute;
   top: 0%;
   text-align: center;
   z-index: ${(props) => (props.clicked ? "-600" : "500")};
   transform: ${(props) => (props.clicked ? "none" : "translateX(-50%)")};
   transition: all 1s;
 }
 .signup {
   position: absolute;
   top: 0%;
   text-align: center;
   z-index: ${(props) => (props.clicked ? "500" : "-500")};
   transform: ${(props) => (props.clicked ? "translateX(50%)" : "none")};
   transition: all 1s;
 }
`;



const Box1 = styled.div`
  background-color: #f1fdcd;
  width: 50%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: ${(props) =>
    props.clicked ? "translateX(90%)" : "translateX(10%)"};
  transition: transform 1s;
  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #efd267
;
    z-index: -200;
  }
  &::before {
    top: 3rem;
    border-radius: 23px;
    border: 4px solid #e8bb3d;
  }
  &::after {
    bottom: 3rem;
    border-radius: 23px 23px 0 0;
    border-top: 4px solid #e8bb3d;
    border-right: 4px solid #e8bb3d;
    border-left: 4px solid #e8bb3d;
  }
`;

const Box2 = styled.div`
  background-color: #e8bb3d;
  width: 45%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 600;
  transform: ${(props) =>
    props.clicked ? "translateX(-122%)" : "translateX(0%)"};
  transition: transform 1s;
  border-radius: ${(props) =>
    props.clicked ? "23px 0 0 23px" : "0 23px 23px 0"};
`;

const Form = styled.form`
  color: #e8b602;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 4rem;
  /* z-index: 100; */
`;

const Input = styled.input`
  background-color: #e8b602;
  border: none;
  border-bottom: 2px solid #e8b602;
  padding: 1rem 2rem;
  margin: 0.5rem 0;
  width: 100%;
  &:focus {
    outline: none;
    border: none;
    border: 2px solid #e8b602;
  }
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 1rem 3.5rem;
  margin-top: 1rem;
  border: 1px solid #e8b602;
  background-color: #e8b602;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;
  box-shadow: 0 7px #faeda9;
  &:hover {
    background-color: #f5e8be;
    color: #e8b602;

;
  }
  &:active {
    background-color: #e5ce70;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
  &:focus {
    outline: none;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1.4rem;
  margin: 1rem 0;
`;

const ButtonAnimate = styled.button`
  position: absolute;
  z-index: 1000;
  height: 5rem;
  width: 5rem;
  top: 70%;
  border: none;
  cursor: pointer;
  right: ${(props) => (props.clicked ? "52%" : "42%")};
  transform: ${(props) => (props.clicked ? "rotate(360deg)" : "rotate(0)")};
  transition: all 1.5s;
  background-color: transparent;
  &::before {
    content: "🍽";
    font-size: 4rem;
  }
  &:focus {
    outline: none;
  }
`;

const Text = styled.div`
  position: absolute;
  z-index: 1000;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  letter-spacing: 0.2rem;
  color: #fff;
  .attention {
    font-size: 2.5rem;
    position: relative;
    margin-top: 2rem;
  }
  .attention-icon {
    position: absolute;
    right: ${(props) => (props.clicked ? "0" : "none")};
    top: 100%;
    font-size: 5rem;
  }
  .attention-icon2 {
    position: absolute;
    right: ${(props) => (props.clicked ? "0" : "none")};
    left: 49px;
    top: 100%;
    font-size: 5rem;
  }

`;


function FormComponent() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      {" "}
      <BackgroundBox clicked={click}>
        <ButtonAnimate clicked={click} onClick={handleClick}></ButtonAnimate>

        <Form className="signin">
          <Title>Sign In</Title>
          <Input type="email" name="email" id="emailId" placeholder="Email" />
          <Input
            type="password"
            name="password"
            id="passwordId"
            placeholder="Password"
          />
          <Link href="#">Forgot Your Password?</Link>
          <Button>Sign In</Button>
        </Form>

        <Form className="signup">
          <Title>Sign Up</Title>
          <Input
            type="text"
            name="username"
            id="usernameId"
            placeholder="Username"
          />

          <Input type="email" name="email" id="emailId" placeholder="Email" />
          <Input
            type="password"
            name="password"
            id="passwordId"
            placeholder="Password"
          />
          <Input id="telNo" 
          name="telNo" 
          type="tel" 
          placeholder="123-4567-8901" 
          />

          <Link href="#" onClick={handleClick}>
            Already have an Account?
          </Link>
          <Button>Sign Up</Button>
        </Form>

        <Text className="text1" clicked={click}>
          <h1>Welcome!</h1>
          Don't have an account?
          <br />
          <span className="attention">Bon appétit</span>
          <span className="attention-icon2">⤶</span>
        </Text>

        <Text className="text2" clicked={click}>
          <h1>Bonjour!</h1>
          Already have an account?
          <br />
          <span className="attention">Bon appétit </span>
          <span className="attention-icon">⤷</span>
        </Text>

        <Box1 clicked={click} />
        <Box2 clicked={click} />
      </BackgroundBox>
    </>
  );
}

export default FormComponent;