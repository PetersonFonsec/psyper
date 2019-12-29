import axios from "axios";

class Auth {
  constructor() {
    this.router = "/auth";
  }

  async validToken(token) {
    const headers = { authorization: token };

    try {
      const result = await axios.post(this.router, "", headers);

      return result;
    } catch (error) {
      return false;
    }
  }
}

export default new Auth();
