import axios from "axios";
export default {
  async Post(url, data) {
    axios
      .post(url, data)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err.json();
      });
  },
  GetById(url, id) {
    axios
      .get(url, id)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err.json();
      });
  },
  GetAlldata(url) {
    axios
      .get(url)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err.json();
      });
  },
};
