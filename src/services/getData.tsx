import axios from "axios";

const getData = async (url: any) => {
  try {
    const res = await axios.get(url);
    const result = await res.data;
    return result;
  } catch (err) {}
};

export default getData;
