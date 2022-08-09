import { useNavigate } from "react-router";
import { IMultiSpacies } from "../../models/spaciesData";
import { StyleSheet } from "../../models/styleSheet";
import { getSpaciesImg } from "../search-bar/img-helper";

type Props = {
  renderedSpaciesList: any;
};

const Spacies = (props: Props) => {
  const { renderedSpaciesList } = props;
  const navigate = useNavigate();

  const handlerNavigate = (spacies: IMultiSpacies) => {
    navigate(`/spacies/${spacies.name}`, { state: { spacies } });
  };

  return (
    <div style={styles.container}>
      {renderedSpaciesList?.map((spacies: any, i: number) => (
        <div
          style={styles.spaciesContainer}
          key={i}
          onClick={() => handlerNavigate(spacies)}
        >
          <img
            style={styles.spaciesImage}
            src={getSpaciesImg(spacies.name)}
            alt={spacies.name}
          />
          <button
            style={styles.buttonSpacies}
            onClick={() => handlerNavigate(spacies)}
            key={i}
          >
            {spacies.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Spacies;

const styles: StyleSheet = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px 32px",
    gap: 10,
    flexWrap: "wrap",
    maxWidth: 1099,
  },
  spaciesContainer: {
    padding: 4,
    display: "flex",
    flexDirection: "column",
  },
  buttonSpacies: {
    border: "2px solid black",
    width: 166,
    margin: 4,
    fontSize: "1rem",
    background: "white",
    borderRadius: "6% 6%",
    boxShadow: "2px 2px 5px 1px rgba(255,255,255,0.35)",
    fontFamily: "Strjmono",
  },

  spaciesImage: {
    border: "2px solid black",
    height: 220,
    width: 164,
    margin: 4,
    fontSize: "1rem",
    background: "white",
    borderRadius: "30% 3%",
    boxShadow: "2px 2px 5px 1px rgba(255,255,255,0.35)",
  },
};
