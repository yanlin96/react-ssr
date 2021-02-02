import axios from "axios";
import { CHANGE_LIST } from "./constants";

const changeHomeList = (list) => ({
  type: CHANGE_LIST,
  list,
});

export const getHomeList = () => {
  return (dispatch) => {
    // console.log(process.env.secret);
    return axios
      .get(`http://47.95.113.63/ssr/api/news.json?secret=${"PP87ANTIPIRATE"}`)
      .then((res) => {
        const { data } = res.data;
        console.log("get the data?", data);
        dispatch(changeHomeList(data));
      });
  };
};
