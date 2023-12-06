import firebase from "../firebase";
import toast from "react-hot-toast";

const login = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
	toast.success("Logged in successfully!");
  } catch (error) {
    toast.error(error.message);
  }
};

export default login;
