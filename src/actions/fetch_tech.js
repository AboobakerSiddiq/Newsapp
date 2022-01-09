import axios from "axios";
export function fetchTech() {
  return function (dispatch) {
    return axios
      .get(
        "https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=0955d68036b8448081c87d4a3124f61d"
      )
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        dispatch({ type: "FETCH_TECH", payload: res.articles });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
