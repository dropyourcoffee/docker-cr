import {ImageProfile, ImageTag} from "@typedef/models";
import {request, ApiResponse} from "./client";
/**
 * Fetch general profile for {name} image
 * */
export async function reqImageProfile(name: string): Promise<ImageProfile> {

  const mockRequest = async (option:{params:any}): Promise<any> => //{
    new Promise((resolve, _) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            name,
            author: "dropyourcoffee",
            desc: "Up-to-date Image",
            lastUpdate: new Date(),
            nTags: 2
          }
          // error: Error("cannot fetch image")
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

export async function reqImageTagList(name: string): Promise<ImageTag[]> {

  const mockRequest = async (option:{params:any}): Promise<any> => //{
    new Promise((resolve, _) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: [
            {
              name: "latest",
              author: "dropyourcoffee",
              digest: "sha256:def822f9851ca422481ec6fee59a9966f12b351c62ccb9aca841526ffaa9f748",
              size: 10000000,
              lastUpdate: new Date(),
            },
            {
              name: "1.0.0",
              author: "dropyourcoffee",
              digest: "sha256:def822f9851ca422481ec6fee59a9966f12b351c62ccb9aca841526ffaa9f748",
              size: 11000000,
              lastUpdate: new Date(Date.now() - 1 * 86400000),
            },
          ]
        });
      }, 600);
    });


  try {
    const res: ApiResponse<ImageTag[]> = await mockRequest({params:{name}});

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
    // const res: ApiResponse<ImageProfile[]> = await mockRequest({params:{name}});
    const res  = await request({
      url:"/_catalog_list",
    });
    console.log('res', res);

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
 * Fetch blob of image
 * */
export async function reqImageBlob (name: string): Promise<any> {

  const mockRequest = async (option:{params:any}): Promise<any> => //{
    new Promise((resolve, _) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            architecture: "amd64",
            config: {
              "Hostname": "", "Domainname": "", "User": "", "AttachStdin": false, "AttachStdout": false, "AttachStderr": false,
              "ExposedPorts": { "6379/tcp": {} },
              "Tty": false,
              "OpenStdin": false,
              "StdinOnce": false,
              "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "REDIS_VERSION=6.2.3",
                "REDIS_DOWNLOAD_URL=http://download.redis.io/releases/redis-6.2.3.tar.gz",
                "REDIS_DOWNLOAD_SHA=98ed7d532b5e9671f5df0825bb71f0f37483a16546364049384c63db8764512b"
              ],
              "Cmd": [ "redis-server" ],
              "Image": "sha256:4e014459479feaaae7d9683e8e0d6c4db614b39369b98ae9bced5d9bdad48431",
              "Volumes": { "/data": {} },
              "WorkingDir": "/data",
              "Entrypoint": [ "docker-entrypoint.sh" ],
              "OnBuild": null,
              "Labels": null
            },
            container: "30c919b2bc6a0f8d94a4eeef9f55b887e21288dcbf8c7e66367f3a09f8821246",
            container_config: {
              "Hostname": "30c919b2bc6a",
              "Domainname": "",
              "User": "",
              "AttachStdin": false,
              "AttachStdout": false,
              "AttachStderr": false,
              "ExposedPorts": { "6379/tcp": {} },
              "Tty": false,
              "OpenStdin": false,
              "StdinOnce": false,
              "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "REDIS_VERSION=6.2.3",
                "REDIS_DOWNLOAD_URL=http://download.redis.io/releases/redis-6.2.3.tar.gz",
                "REDIS_DOWNLOAD_SHA=98ed7d532b5e9671f5df0825bb71f0f37483a16546364049384c63db8764512b"
              ],
              "Cmd": [ "/bin/sh", "-c", "#(nop) ", "CMD [\"redis-server\"]" ],
              "Image": "sha256:4e014459479feaaae7d9683e8e0d6c4db614b39369b98ae9bced5d9bdad48431",
              "Volumes": { "/data": {} },
              "WorkingDir": "/data",
              "Entrypoint": [ "docker-entrypoint.sh" ],
              "OnBuild": null,
              "Labels": {}
            },
            created: "2021-05-03T22:57:49.366261306Z",
            docker_version: "19.03.12",
            history: [
              {
                "created": new Date("2021-04-14T19:19:39.267885491Z"),
                "created_by": "/bin/sh -c #(nop) ADD file:8ec69d882e7f29f0652d537557160e638168550f738d0d49f90a7ef96bf31787 in / "
              },
              {
                "created": new Date("2021-04-14T19:19:39.643236135Z"),
                "created_by": "/bin/sh -c #(nop)  CMD [\"/bin/sh\"]",
                "empty_layer": true
              },
              {
                "created": new Date("2021-04-15T02:38:17.739607623Z"),
                "created_by": "/bin/sh -c addgroup -S -g 1000 redis && adduser -S -G redis -u 999 redis"
              },
              {
                "created": new Date("2021-04-15T02:38:20.811619176Z"),
                "created_by": "/bin/sh -c apk add --no-cache \t\t'su-exec>=0.2' \t\ttzdata"
              },
              {
                "created": new Date("2021-05-03T22:56:46.134940527Z"),
                "created_by": "/bin/sh -c #(nop)  ENV REDIS_VERSION=6.2.3",
                "empty_layer": true
              },
              {
                "created": new Date("2021-05-03T22:56:46.31119011Z"),
                "created_by": "/bin/sh -c #(nop)  ENV REDIS_DOWNLOAD_URL=http://download.redis.io/releases/redis-6.2.3.tar.gz",
                "empty_layer": true
              },
              {
                "created": new Date("2021-05-03T22:56:46.499450131Z"),
                "created_by": "/bin/sh -c #(nop)  ENV REDIS_DOWNLOAD_SHA=98ed7d532b5e9671f5df0825bb71f0f37483a16546364049384c63db8764512b",
                "empty_layer": true
              },
              {
                "created": new Date("2021-05-03T22:57:47.324780342Z"),
                "created_by": "/bin/sh -c set -eux; \t\tapk add --no-cache --virtual .build-deps \t\tcoreutils \t\tdpkg-dev dpkg \t\tgcc \t\tlinux-headers \t\tmake \t\tmusl-dev \t\topenssl-dev \t\twget \t; \t\twget -O redis.tar.gz \"$REDIS_DOWNLOAD_URL\"; \techo \"$REDIS_DOWNLOAD_SHA *redis.tar.gz\" | sha256sum -c -; \tmkdir -p /usr/src/redis; \ttar -xzf redis.tar.gz -C /usr/src/redis --strip-components=1; \trm redis.tar.gz; \t\tgrep -E '^ *createBoolConfig[(]\"protected-mode\",.*, *1 *,.*[)],$' /usr/src/redis/src/config.c; \tsed -ri 's!^( *createBoolConfig[(]\"protected-mode\",.*, *)1( *,.*[)],)$!\\10\\2!' /usr/src/redis/src/config.c; \tgrep -E '^ *createBoolConfig[(]\"protected-mode\",.*, *0 *,.*[)],$' /usr/src/redis/src/config.c; \t\tgnuArch=\"$(dpkg-architecture --query DEB_BUILD_GNU_TYPE)\"; \textraJemallocConfigureFlags=\"--build=$gnuArch\"; \tdpkgArch=\"$(dpkg --print-architecture)\"; \tcase \"${dpkgArch##*-}\" in \t\tamd64 | i386 | x32) extraJemallocConfigureFlags=\"$extraJemallocConfigureFlags --with-lg-page=12\" ;; \t\t*) extraJemallocConfigureFlags=\"$extraJemallocConfigureFlags --with-lg-page=16\" ;; \tesac; \textraJemallocConfigureFlags=\"$extraJemallocConfigureFlags --with-lg-hugepage=21\"; \tgrep -F 'cd jemalloc && ./configure ' /usr/src/redis/deps/Makefile; \tsed -ri 's!cd jemalloc && ./configure !&'\"$extraJemallocConfigureFlags\"' !' /usr/src/redis/deps/Makefile; \tgrep -F \"cd jemalloc && ./configure $extraJemallocConfigureFlags \" /usr/src/redis/deps/Makefile; \t\texport BUILD_TLS=yes; \tmake -C /usr/src/redis -j \"$(nproc)\" all; \tmake -C /usr/src/redis install; \t\tserverMd5=\"$(md5sum /usr/local/bin/redis-server | cut -d' ' -f1)\"; export serverMd5; \tfind /usr/local/bin/redis* -maxdepth 0 \t\t-type f -not -name redis-server \t\t-exec sh -eux -c ' \t\t\tmd5=\"$(md5sum \"$1\" | cut -d\" \" -f1)\"; \t\t\ttest \"$md5\" = \"$serverMd5\"; \t\t' -- '{}' ';' \t\t-exec ln -svfT 'redis-server' '{}' ';' \t; \t\trm -r /usr/src/redis; \t\trunDeps=\"$( \t\tscanelf --needed --nobanner --format '%n#p' --recursive /usr/local \t\t\t| tr ',' '\\n' \t\t\t| sort -u \t\t\t| awk 'system(\"[ -e /usr/local/lib/\" $1 \" ]\") == 0 { next } { print \"so:\" $1 }' \t)\"; \tapk add --no-network --virtual .redis-rundeps $runDeps; \tapk del --no-network .build-deps; \t\tredis-cli --version; \tredis-server --version"
              },
              {
                "created": new Date("2021-05-03T22:57:48.250932375Z"),
                "created_by": "/bin/sh -c mkdir /data && chown redis:redis /data"
              },
              {
                "created": new Date("2021-05-03T22:57:48.439080986Z"),
                "created_by": "/bin/sh -c #(nop)  VOLUME [/data]",
                "empty_layer": true
              },
              {
                "created": new Date("2021-05-03T22:57:48.63367552Z"),
                "created_by": "/bin/sh -c #(nop) WORKDIR /data",
                "empty_layer": true
              },
              {
                "created": new Date("2021-05-03T22:57:48.831811323Z"),
                "created_by": "/bin/sh -c #(nop) COPY file:c48b97ea65422782310396358f838c38c0747767dd606a88d4c3d0b034a60762 in /usr/local/bin/ "
              },
              {
                "created": new Date("2021-05-03T22:57:49.019716244Z"),
                "created_by": "/bin/sh -c #(nop)  ENTRYPOINT [\"docker-entrypoint.sh\"]",
                "empty_layer": true
              },
              {
                "created": new Date("2021-05-03T22:57:49.190247133Z"),
                "created_by": "/bin/sh -c #(nop)  EXPOSE 6379",
                "empty_layer": true
              },
              {
                "created": new Date("2021-05-03T22:57:49.366261306Z"),
                "created_by": "/bin/sh -c #(nop)  CMD [\"redis-server\"]",
                "empty_layer": true
              }
            ],
            os: "linux",
            rootfs: {
              "type": "layers",
              "diff_ids": [
                "sha256:b2d5eeeaba3a22b9b8aa97261957974a6bd65274ebd43e1d81d0a7b8b752b116",
                "sha256:d2c4a6adc52937b6c8dc5152ef529b59462ff1d3be7b16490d85f1fdef67bf14",
                "sha256:33292fe7ceb9566f7e93d4910733a6cd99f9383856347c00cb62a3541de4a462",
                "sha256:845cc97e6c8b232db2de85a707747d0f81c3ea430a95e407721dc9d1c20e9cb1",
                "sha256:c432e6f541e7bf6f697de8a952a3199cd0f91f4e14700db0bd1357b3f16c8fd7",
                "sha256:f3286249f0c58c94fb6875eddb5e668818676c3095fcdbcb6cb34f66412ac690"
              ]
            }
          }

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
