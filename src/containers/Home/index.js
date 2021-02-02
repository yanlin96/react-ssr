import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import { getHomeList } from "./store/actions";

const Home = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.home.name);
  const newsList = useSelector((state) => state.home.newsList);

  useEffect(() => {
    console.log("I am here");
    //目前得到的数据是客户端渲染出来的
    if (!newsList.length) {
      dispatch(getHomeList());
    }
  }, []);

  const getList = () => {
    return newsList.map((item) => <div key={item.id}>{item.title}</div>);
  };

  return (
    <div>
      <Header />
      <div>Home!! {name}</div>
      {getList()}
      <button
        onClick={() => {
          alert("clicked");
        }}
      >
        Click me
      </button>
    </div>
  );
};

Home.loadData = (store) => {
  // 这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList());
};

export default Home;
