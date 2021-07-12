import axios from "axios";
import md5 from "md5";
const BASE_URL = "https://gateway.marvel.com/v1/public/";
const PUBLIC = "4e4c8fc874a09802a8d6b74f88aec68e";
const PRIVATE = "82a9db19df32f208dad11c2c1264e7631e2b34f9";
let ts = 1;
let hash = md5(ts + PRIVATE + PUBLIC).toString();

const getComics = async (count) => {
  const data = await axios.get(
    `${BASE_URL}comics?ts=${ts}&apikey=${PUBLIC}&hash=${hash}`
  );
  return data;
};
const getCharacters = async (count) => {
  const PUBLIC = "4e4c8fc874a09802a8d6b74f88aec68e";
  const PRIVATE = "82a9db19df32f208dad11c2c1264e7631e2b34f9";
  let ts = 1;

  let hash = md5(ts + PRIVATE + PUBLIC).toString();

  const data = await axios.get(
    `${BASE_URL}characters?ts=${ts}&apikey=${PUBLIC}&hash=${hash}`
  );

  return data;
};

export { getComics, getCharacters };
