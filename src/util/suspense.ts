export interface Readable<T> {
  read: () => T
}

enum Status {
  success="success",
  error="error",
  pending="pending",
}

const wrapPromise = <T> (promise: Promise <T>): Readable <T> => {
  let status: Status = Status.pending;
  let result: any;

  let suspender = promise.then(
    r => {
      status = Status.success;
      result = r;
    },
    e => {
      status = Status.error;
      result = e;
    }
  );

  return {
    read: ()=>{
        if (status === Status.pending) {
          throw suspender;
        }
        else if (status === Status.error) {
          throw result;
        }
        else if (status === Status.success) {
          return result;
        }
      }
  };

};

export function suspensify <T, U> (fn:(args:U)=>Promise<T>, args:U): Readable <T> {
  return wrapPromise(fn(args));
}
