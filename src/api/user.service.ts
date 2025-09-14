import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiUserService {
  private readonly API_URL = '';

  constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {
    this.API_URL = this.configService.get('API_URL') || '';
  }

  async verifyOmsToken(token?: string) {
    const result = await this.httpService.axiosRef.get(`${this.API_URL}/auth/v1/oms/verifytoken`, { headers: { authorization: token } });

    return result.data;
  }

  async verifyEpToken(token?: string) {
    const result = await this.httpService.axiosRef.get(`${this.API_URL}/auth/v1/ep/verifytoken`, { headers: { authorization: token } });

    return result.data;
  }

  async verifyCpToken(token?: string) {
    const result = await this.httpService.axiosRef.get(`${this.API_URL}/auth/v1/cp/verifytoken`, { headers: { authorization: token } });

    return result.data;
  }

  async verifyWbToken(token?: string) {
    const result = await this.httpService.axiosRef.get(`${this.API_URL}/auth/v1/wb/verifytoken`, { headers: { authorization: token } });

    return result.data;
  }

  async verifyTempToken(token?: string) {
    const result = await this.httpService.axiosRef.get(`${this.API_URL}/auth/v1/token/verify`, { headers: { authorization: token } });

    return result.data;
  }

  async getShortConfig() {
    const result = await this.httpService.axiosRef.get(`${this.API_URL}/usvc/v1/config/short/internal`);

    return result.data;
  }
}
