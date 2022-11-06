import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { countState, userState } from "../components/atoms";

const Home = () => {
  //atomの値の操作を定義(r,w)
  const [count, setCount] = useRecoilState(countState);
  const [user, setUser] = useRecoilState(userState);

  //count increment処理
  const increment = (c) => {
    return c + 1;
  };

  //userのageをカウントアップ
  const updateUser = (u) => {
    return { ...u, ...{ age: u.age + 1 } };
  };
  return (
    <>
      <h1>Home</h1>
      <div>
        <p>count:{count}</p>
        <button onClick={() => setCount(increment)}>count increment</button>
        <hr />
        <p>user.name:{user.name}</p>
        <p>user.age:{user.age}</p>
        <button onClick={() => setUser(updateUser)}>age increment</button>
      </div>
      <hr />
      <div>
        <Link href="/about">About</Link>
      </div>
    </>
  );
};

export default Home;
