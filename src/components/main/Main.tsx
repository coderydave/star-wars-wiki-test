import FilteredResults from "../filtered-results/FilteredResults";
import SearchNotFound from "../not-found/SearchNotFound";
import Spacies from "../spacies/Spacies";
import { StyleSheet } from "../../models/styleSheet";

const Main = (props: { renderedSpaciesList: any; renderedSearchList: any }) => {
  return (
    <div style={styles.container}>
      {props.renderedSearchList != null ? (
        props.renderedSearchList.length > 0 ? (
          <FilteredResults renderedSearchList={props.renderedSearchList} />
        ) : (
          <SearchNotFound />
        )
      ) : (
        <Spacies renderedSpaciesList={props.renderedSpaciesList} />
      )}
    </div>
  );
};

export default Main;

const styles: StyleSheet = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
};
