import React from "react";

import { Link } from "react-router-dom";

const styles = {
  container: {
    minHeight: "calc(100vh - 70px)",
    paddingTop: "40px",
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    marginTop: 0,
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

export default function HomePage () {

    return (
        <div style={styles.container}>           
            <h1 style={styles.title}>Welcome!</h1>
            <h2> Create your phone book of contacts</h2>
            <h3>
                <Link to={"/register"}>Sign Up</Link> (for new users) or{" "}   
                <Link to={"/login"}> Log In </Link> to get access to your contacts.    
            </h3>           
  </div>
    )
}