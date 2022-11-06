import { atom } from "recoil";
import { recoilPersist } from "recoil-persist"; //追加
const { persistAtom } = recoilPersist(); //追加

//count
export const countState = atom({
  key: "count",
  default: 0,
});

//user
export const userState = atom({
  key: "user",
  default: {
    name: "hoge",
    age: 11,
  },
  effects_UNSTABLE: [persistAtom], //追加
});
