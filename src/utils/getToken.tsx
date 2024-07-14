import axios from "axios";

const getToken = async () => {
  try {
    const token = await axios.post("https://api.sirv.com/v2/token", {
      clientId: process.env.NEXT_PUBLIC_SIRV_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_SIRV_CLIENT_SECRET,
    });
    return token.data?.token;
  } catch (e) {
    console.log(e);
  }
};

export default getToken;
