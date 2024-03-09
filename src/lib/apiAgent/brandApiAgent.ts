import { IDeleteDto } from "../../models/IDeleteDto";
import { IBrand } from "../../models/brand/IBrand";
import { IApiResponse } from "./_IApiResponse";
import { root_apiAgent } from "./_root_apiAgent";

const baseurl = process.env.REACT_APP_API_URL;
const brandEndpoint = `${baseurl}/brand`;

export const brandApiAgent = {
  getAll: async (): Promise<IApiResponse<IBrand[]>> => {
    const response = await root_apiAgent.get(brandEndpoint);
    return {
      success: response.ok,
      code: response.status,
      body: response.ok ? await response.json() : undefined,
    };
  },

  create: async (dto: IBrand): Promise<IApiResponse<undefined>> => {
    const response = await root_apiAgent.post(brandEndpoint, dto);
    return {
      success: response.ok,
      code: response.status,
    };
  },
  update: async (dto: IBrand): Promise<IApiResponse<undefined>> => {
    const response = await root_apiAgent.put(brandEndpoint, dto);
    return {
      success: response.ok,
      code: response.status,
    };
  },
  delete: async (dto: IDeleteDto): Promise<IApiResponse<undefined>> => {
    const response = await root_apiAgent.delete(brandEndpoint, dto);
    return {
      success: response.ok,
      code: response.status,
    };
  },
};
