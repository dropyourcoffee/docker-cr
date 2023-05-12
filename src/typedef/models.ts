

export interface ImageProfile {
  name: string,
  author?: string;
  size?: number;
  lastUpdate?: Date;
  desc?: string;
  tags: Array<string>;
}


export interface ImageTag {
  name: string,
  author: string;
  digest: string;
  size: number;
  lastUpdate: Date;
}

export interface ImageBlob {
  architecture: string,
  config: {
    "Hostname": string,
    "Domainname": string,
    "User": string,
    "AttachStdin":  boolean,
    "AttachStdout": boolean,
    "AttachStderr": boolean,
    "ExposedPorts": any,
    "Tty": boolean,
    "OpenStdin": boolean,
    "StdinOnce": boolean,
    "Env": string[],
    "Cmd": string[],
    "Image": string,
    "Volumes": any,
    "WorkingDir": string,
    "Entrypoint": string[],
    "OnBuild": any,
    "Labels": any,
  },
  container: string,
  container_config: {
    "Hostname": string,
    "Domainname": string,
    "User": string,
    "AttachStdin":  boolean,
    "AttachStdout": boolean,
    "AttachStderr": boolean,
    "ExposedPorts": any,
    "Tty": boolean,
    "OpenStdin": boolean,
    "StdinOnce": boolean,
    "Env": string[],
    "Cmd": string[],
    "Image": string,
    "Volumes": any,
    "WorkingDir": string,
    "Entrypoint": string[],
    "OnBuild": null,
    "Labels": {}
  },
  created: Date,
  docker_version: string,
  history: Array<{
      created:Date,
      created_by:string
    }>,
  os: string,
  rootfs: any
}