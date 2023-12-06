import firebase from "../firebase";
import toast from "react-hot-toast";

const logout = async () => {
  try {
    await firebase.auth().signOut();
	toast.success("Logged out successfully!");
  } catch (error) {
    toast.error(error.message);
  }
};

export default logout;
