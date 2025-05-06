import { axiosInstance } from "../../../../services/axiosConfig.service";
import { login } from "../types/login.types";

export interface LoginResponse {
  id: number;
  name: string;
  role: 'CLIENT';
  depositTotal: number;
  access_token: string;
}

class LoginService {
  async login(data: login) {
    try {
      const res = await axiosInstance.post<LoginResponse>(
        `auth/login`,
        data
      )
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new LoginService();
