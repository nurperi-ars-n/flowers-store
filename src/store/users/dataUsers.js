import { getUsers } from "./userSlice";

export const fetchUsers = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Could not fetch cart data!");
      return await res.json();
    };

    try {
      const flowers = await fetchData();
      dispatch(getUsers(flowers));
    } catch (e) {
      console.log(e);
    }
  };
};
