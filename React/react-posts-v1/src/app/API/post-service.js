import axios from 'axios';

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
      {
        params: { _limit: limit, _page: page },
      }
    );

    // const formattedResponse = response.data.map((obj) => {
    //   let newObj = { ...obj };
    //   newObj.description = newObj.body;
    //   delete newObj.body;
    //   return newObj;
    // });

    // console.log(response);

    return response;
  }
}
