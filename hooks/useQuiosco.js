import { useContext } from "react";
import { QuioscoContext } from "../Context/QuioscoProvider";

export const useQuiosco = () => useContext(QuioscoContext);