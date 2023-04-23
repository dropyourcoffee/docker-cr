
export const timeSince = (date : Date) => {

  let seconds = Math.abs((new Date().getTime() - date.getTime()) / 1000);
  console.log(date, 's', seconds)


  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + ` year${(interval>2)?'s':''} ago`;
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ` month${(interval>2)?'s':''} ago`;
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ` day${(interval>2)?'s':''} ago`;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ` hour${(interval>2)?'s':''} ago`;
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ` minute${(interval>2)?'s':''} ago`;
  }
  return `just now`;

};

export const  formatBytes = (bytes:number, decimals:number = 2)=>{
  if (!+bytes) return '0 Bytes'

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
};
