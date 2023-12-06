import { createContext, useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { useAuth } from "./AuthContext";
import { app } from "../firebase";
import {
  addDoc,
  collection,
  where,
  getDocs,
  deleteDoc,
  doc,
  getFirestore,
  query,
} from "firebase/firestore";

const FavouriteContext = createContext();
const db = getFirestore(app);

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      try {
        const querySnapshot = await getDocs(
          query(collection(db, "favourites"), where("uid", "==", user.uid))
        );

        const data = querySnapshot.docs.map((doc) => doc.data());
        setFavourites(data);
      } catch (error) {
        toast.error("Error fetching favourites!");
      }
    };

    fetchData();
  }, [user]);

  const addFavourite = async (article) => {
    try {
      await addDoc(collection(db, "favourites"), { ...article, uid: user.uid });
      const newFavourites = [...favourites, article];
      setFavourites(newFavourites);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavourite = async (article) => {
    try {
      const q = query(
        collection(db, "favourites"),
        where("uid", "==", user.uid),
        where("customId", "==", article.customId)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.size > 0) {
        querySnapshot.forEach(async (document) => {
          const docRef = doc(db, "favourites", document.id);
          await deleteDoc(docRef);
          console.log("Document successfully deleted!");
        });
      } else {
        console.log("No matching document found");
      }

      const newFavourites = favourites.filter(
        (fav) => fav.customId !== article.customId
      );
      setFavourites(newFavourites);
    } catch (error) {
      console.log(error);
    }
  };

  const isFavourite = (article) => {
	if(!user) return false;
	
    for (let fav of favourites) {
      if (fav.customId === article.customId) {
        return true;
      }
    }

    return false;
  };

  const handleFavouriteClick = (article) => {
	if(!user){
		toast.error("Please login to add to favourites!");
	}

	const articleIsFavorite = isFavourite(article);

    if (articleIsFavorite) {
      removeFavourite(article);
    } else {
      addFavourite(article);
    }
  };

  const emptyFavourites = () => {
	setFavourites([]);
  }

  return (
    <FavouriteContext.Provider
      value={{ favourites, addFavourite, removeFavourite, isFavourite, handleFavouriteClick , emptyFavourites}}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

const useFavourites = () => useContext(FavouriteContext);

export { FavouriteProvider, useFavourites };
