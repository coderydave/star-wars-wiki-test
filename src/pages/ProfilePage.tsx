import { useLocation } from "react-router";
import FilmsComp from "../components/films-comp/Films";
import TextComp from "../components/text-comp/Text";
import { IProfileSpacies, ISpacies } from "../models/spaciesData";
import { StyleSheet } from "../models/styleSheet";
import UseSpecies from "../services/useSpecies";

const ProfilePage = () => {
  const { state } = useLocation();
  const currentStateData: any = state;
  const profileData: IProfileSpacies = state as IProfileSpacies;

  const { responseSpacies, loadingSpacies } = UseSpecies(
    profileData.species[0]
  );
  const spaciesData = responseSpacies;
  return (
    <div style={styles.container}>
      <TextComp label={"Name"} value={profileData.name} />
      <TextComp label={"Gender"} value={profileData.gender} />
      <TextComp label={"Eye color"} value={profileData.eye_color} />
      <TextComp label={"Hair color"} value={profileData.hair_color} />
      <TextComp label={"Skin color"} value={profileData.skin_color} />
      <TextComp label={"Height"} value={profileData.height} />
      <TextComp label={"Mass"} value={profileData.mass} />
      {spaciesData && spaciesData.name && !loadingSpacies && (
        <TextComp label={"Species"} value={spaciesData.name} />
      )}
      <FilmsComp url={profileData.films} />
    </div>
  );
};

export default ProfilePage;

const styles: StyleSheet = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    marginTop: "5%",
  },
};
