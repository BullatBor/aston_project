import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { fireStore } from "../../firebase-config";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";

export const favouriteApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: "favouriteApi",
  endpoints: (build) => ({
    getAllFavourites: build.query<number[], string | null | undefined>({
      async queryFn(email) {
        try {
          if (!email) {
            return { data: [] };
          }

          const userRef = doc(fireStore, "users", email);
          const user = await getDoc(userRef);

          const userData = user.data();

          if (userData) {
            return { data: userData.favourite };
          }

          return { data: [] };
        } catch (e) {
          return { error: e };
        }
      },
    }),
    addToFavourite: build.mutation({
      async queryFn(args: {
        email: string | null | undefined;
        id: number | null | undefined;
      }) {
        try {
          if (!args.email) {
            return { data: [] };
          }

          const userRef = doc(fireStore, "users", args.email);
          await updateDoc(userRef, {
            favourite: arrayUnion(args.id),
          });
          toast.success("Успешно добавлено");
          return { data: [args.id] };
        } catch (e) {
          toast.error("что то пошло не так");
          return { error: e };
        }
      },
    }),
    removeFromFavourite: build.mutation({
      async queryFn(args: {
        email: string | null | undefined;
        id: number | undefined;
      }) {
        try {
          if (!args.email) {
            return { data: [] };
          }

          const userRef = doc(fireStore, "users", args.email);

          await updateDoc(userRef, {
            favourite: arrayRemove(args.id),
          });
          toast.success("Успешно удалено");
          return { data: [args.id] };
        } catch (e) {
          toast.error("что то пошло не так");
          return { error: e };
        }
      },
    }),
  }),
});
