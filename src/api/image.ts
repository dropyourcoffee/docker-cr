import {ImageProfile} from "@typedef/models";
import {ApiResponse} from "./client";

/**
 * Fetch general profile for {name} image
 * */
export async function reqImageProfile(name: string): Promise<ImageProfile> {

  const mockRequest = async (option:{params:any}): Promise<any> => //{
    new Promise((resolve, _) => {
      setTimeout(() => {
        resolve({
          success: false,
          // data: {
          //   name,
          //   author: "dropyourcoffee",
          //   desc: "Up-to-date Image",
          //   lastUpdate: new Date(),
          //   nTags: 2
          // }
          error: Error("cannot fetch image")
        });
      }, 600);
    });


  try {
    const res: ApiResponse<ImageProfile> = await mockRequest({params:{name}});

    if (res.success && res.data)
      return res.data;
    else{
      console.error(res.error);
      throw res.error;
    }

  }
  catch(error) {
    throw error;
  }

}

/**
 * Fetch list of image profiles
 * */
export async function reqFetchImages (): Promise<ImageProfile[]> {

  const mockRequest = async (option:{params:any}): Promise<any> => //{
    new Promise((resolve, _) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: [
            {name: 'foo', author:"dropyourcoffee", desc:"do not pull this", nTags: 1},
            {name: 'bar', author:"dropyourcoffee", desc:"Up-to-date Image", lastUpdate:new Date(), nTags: 2},
            {name: 'baz', author:"dropyourcoffee", lastUpdate:new Date('2023-04-01'), nTags: 2}
          ]
        });
      }, 600);
    });


  try {
    const res: ApiResponse<ImageProfile[]> = await mockRequest({params:{name}});

    if (res.success && res.data)
      return res.data;
    else{
      console.error(res.error);
      throw res.error;
    }

  }
  catch(error) {
    throw error;
  }

}
