import { db } from "../index";
import { collection, getDocs } from "firebase/firestore";
import { Route } from "./types";

export const getBusRoute = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "busRoute"));

    const result: Route[] = [];
    querySnapshot.forEach((doc) => {
      const data: Route = {
        ...(doc.data() as Route),
        id: doc.id,
      };
      result.push(data);
    });

    return result;
  } catch (error) {
    console.log("No encontro data de los ruta de los  bus", error);
  }
};
