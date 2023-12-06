import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const googleAuth = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
	  toast.success("Logged in successfully!");
    })
    .catch((error) => {
		toast.error("Error signing in with Google!");
    });
};

export default googleAuth;