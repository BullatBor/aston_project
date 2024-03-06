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

export const historyApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: "historyApi",
  refetchOnMountOrArgChange: true,
  tagTypes: ["history"],
  endpoints: (build) => ({
    getHistory: build.query<string[], string | null | undefined>({
      async queryFn(email) {
        try {
          if (!email) {
            return { data: [] };
          }

          const userRef = doc(fireStore, "users", email);
          const user = await getDoc(userRef);

          const userData = user.data();

          if (userData) {
            return { data: userData.history };
          }

          return { data: [] };
        } catch (e) {
          return { error: e };
        }
      },
      providesTags: ["history"],
    }),
    addToHistory: build.mutation({
      async queryFn(args: {
        email: string | null | undefined;
        searchQuery: string | null | undefined;
      }) {
        try {
          if (!args.email) {
            return { data: [] };
          }

          const userRef = doc(fireStore, "users", args.email);

          await updateDoc(userRef, {
            history: arrayUnion(args.searchQuery),
          });
          return { data: [args.searchQuery] };
        } catch (e) {
          toast.error("что то пошло не так");
          return { error: e };
        }
      },
      invalidatesTags: ["history"],
    }),
    removeFromHistory: build.mutation({
      async queryFn(args: {
        email: string | null | undefined;
        searchQuery: string | undefined;
      }) {
        try {
          if (!args.email) {
            return { data: [] };
          }

          const userRef = doc(fireStore, "users", args.email);

          await updateDoc(userRef, {
            history: arrayRemove(args.searchQuery),
          });
          return { data: [args.searchQuery] };
        } catch (e) {
          toast.error("что то пошло не так");
          return { error: e };
        }
      },
      invalidatesTags: ["history"],
    }),
  }),
});
