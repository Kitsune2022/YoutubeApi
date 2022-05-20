export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}


import axios from "axios";
export const GetApi = {
  GetApi() {

    axios({
      url: "http://localhost/API_TCC/API/BasicData/Company",
      method: "post",
    })
      .then((resp) => {
        this.Companys = resp.data;
        console.log(this.Companys);
      })
      .catch((err) => {
        console.log(err);
      });


  }

}




