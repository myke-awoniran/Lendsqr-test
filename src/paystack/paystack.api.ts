import axios from 'axios';
import { User } from '../dtos/create-user.dtos';

const options = {
  data: {
    email: 'awoniranopeyemi@gmail.com',
  },
  headers: {
    Authorization: 'Bearer sk_test_15fed987ed8e42bf1d68ac6503757e4bf29cdcf0',
  },
};

async function createUser() {
  try {
    const response = await axios.post(
      'https://api.paystack.co/customer',
      options
    );
    console.log(response);
  } catch (error: any) {
    console.log(error.message);
  }
}

createUser();
