import { useNavigate } from "react-router";
import { ISpacies } from "../../models/spaciesData";
import { StyleSheet } from "../../models/styleSheet";

type Props = {
  renderedSearchList: any;
};

const FilteredResults = (props: Props) => {
  const { renderedSearchList } = props;
  const navigate = useNavigate();

  const handlerNavigate = (spacies: ISpacies) => {
    const iD = spacies.url.split("people/")[1];
    navigate(`/profile/${iD}`, { state: { ...spacies } });
  };

  return (
    <div style={styles.container}>
      {renderedSearchList.map((spacies: any, i: number) => (
        <button
          style={styles.buttonSpacies}
          onClick={() => handlerNavigate(spacies)}
          key={i}
        >
          {spacies.name}
        </button>
      ))}
    </div>
  );
};

export default FilteredResults;

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
};
