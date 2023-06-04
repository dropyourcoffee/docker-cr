export interface Readable<T> {
  read: () => T
}

export const wrapPromise = (promise: Promise<any>): Readable<any> => {
  let status = "pending";
  let result: any;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }

  );

  return {
    read(){
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }

    }
  }

};

export function suspensify<T, U> (fn:(args:U)=>Promise<T>, args:U): Readable <T> {
  return wrapPromise(fn(args));
}
