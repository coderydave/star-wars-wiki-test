import { useLocation, useNavigate } from "react-router";
import { IMultiSpacies, ISpacies } from "../models/spaciesData";
import { StyleSheet } from "../models/styleSheet";
import UseSpecies from "../services/useSpecies";

const SpaciesPage = () => {
  const { state } = useLocation();
  const location = useLocation();

  const isDroids = location.pathname.includes("Droid") ? true : false;

  const currentStateData: any = state;
  const profileData: IMultiSpacies = currentStateData.spacies;
  const navigate = useNavigate();

  const getName = (spacies: string) => {
    const { responseSpacies } = UseSpecies(spacies);
    const name = responseSpacies?.name;
    return name;
  };
  const getData = (spacies: string) => {
    const { responseSpacies } = UseSpecies(spacies);
    const data = responseSpacies;
    return data;
  };

  const handlerNavigate = async (data: ISpacies) => {
    const iD = data.url.split("people/")[1];
    navigate(`/profile/${iD}`, { state: { ...data } });
  };

  const renderedArray = (profileData: IMultiSpacies) =>
    profileData.people.map((spacies: string, i: number) => {
      const name = getName(spacies);
      const data = getData(spacies);

      return (
        <button
          style={isDroids ? styles.buttonSpaciesDroids : styles.buttonSpacies}
          onClick={() => handlerNavigate(data)}
          key={i}
        >
          {name}
        </button>
      );
    });

  return <div style={styles.container}>{renderedArray(profileData)}</div>;
};

export default SpaciesPage;

const styles: StyleSheet = {
  container: {
    flexWrap: "wrap",
    padding: 16,
  },
  buttonSpacies: {
    minWidth: 150,
    margin: 4,
    fontSize: "1rem",
    background: "white",
    border: "2px solid black",
    width: 166,
    fontFamily: "Strjmono",
    borderRadius: "6% 6%",
    boxShadow: "2px 2px 5px 1px rgba(255,255,255,0.35)",
  },
  buttonSpaciesDroids: {
    minWidth: 150,
    margin: 4,
    fontSize: "1rem",
    background: "white",
    border: "2px solid black",
    width: 166,
    fontFamily: "Roboto",
    fontWeight: 700,
    borderRadius: "6% 6%",
    boxShadow: "2px 2px 5px 1px rgba(255,255,255,0.35)",
  },
};
