import { IApiResponse } from "../models/IApiResponse";
import { ILoginRequestDTO } from "../models/account/ILoginRequestDTO";
import { ILoginResponseDTO } from "../models/account/ILoginResponseDTO";
import { useRootApiAgent } from "./_root_apiAgent";

const loginPath = "login";

export const useAuthApiAgent = () => {
  const rootAgent = useRootApiAgent();
  return {
    login: async (
      dto: ILoginRequestDTO
    ): Promise<IApiResponse<ILoginResponseDTO>> => {
      try {
        const response = await rootAgent.post(loginPath, dto);
        return {
          success: response.ok,
          code: response.status,
          body: response.ok ? await response.json() : undefined,
        };
      } catch (ex) {
        return {
          success: false,
          code: 500,
        };
      }
    },
  };
};
