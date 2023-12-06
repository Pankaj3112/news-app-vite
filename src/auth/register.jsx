import toast from "react-hot-toast";
import firebase from "../firebase";

const register = async (name, email, password) => {
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await res.user.updateProfile({ displayName: name });
	toast.success("Registered successfully!");
  } catch (error) {
    toast.error(error.message);
  }
};

export default register;
