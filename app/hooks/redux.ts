import { useDispatch, useSelector } from "react-redux";

import type { TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, TypeRootState } from "../store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector;
