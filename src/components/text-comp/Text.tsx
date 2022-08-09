import React from "react";
import { StyleSheet } from "../../models/styleSheet";

interface Props {
  label: string;
  value: string;
}

const TextComp = (props: Props) => {
  let hasNumber = /\d/;
  return (
    <div style={styles.container}>
      <p style={styles.label}>{props.label}</p>
      <p style={hasNumber.test(props.value) ? styles.valueExc : styles.value}>
        {props.value}
      </p>
    </div>
  );
};

export default TextComp;

const styles: StyleSheet = {
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    gap: "5%",
    alignItems: "center",
  },
  label: {
    fontSize: "1rem",
    color: "black",
    textShadow: "0px 0px 4px #FFD700",
    fontWeight: 700,
    width: 140,
    textAlign: "start",
    margin: 12,
  },
  value: {
    fontSize: "1rem",
    color: "white",
    fontWeight: 400,
    width: 140,
    textAlign: "start",
    margin: 4,
    textShadow: "4px 5px 4px #2E67F8",
  },
  valueExc: {
    fontSize: "1.2rem",
    color: "white",
    fontFamily: "Roboto",
    fontWeight: 700,
    width: 140,
    textAlign: "start",
    margin: 4,
    textShadow: "4px 5px 4px #2E67F8",
  },
};
