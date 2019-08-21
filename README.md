# Project Ubin Phase 2 - Common UI

This repository contains the source code for the common UI deployed in Project Ubin Phase 2. 

The UI is a consolidated UI that allows single page access to all banks and MAS view. Only one instance is required per platform.

## Prerequisites

1. Install Bower
```sh
npm -g install bower
```

2. Install Grunt
```sh
npm -g install grunt
```

3. Install Http-server
```sh
npm -g install http-server
```

4. Install dependencies
```sh
npm install
bower install
```

## Configuration

1. Go to [app/scripts/services/Constants.js](app/scripts/services/Constants.js)
2. The endpoints for each platform are stored its own variable map.
    - Quorum configuration key: `quorumConstants`
3. Under the specific platform key (e.g. `quorumConstants`), edit the `mepsEndpoint` to point to the URL where [`ubin-ext-service`](https://github.com/project-ubin/ubin-ext-service) has been deployed and run for the environment.
4. Under `bankNodes` key, each key (e.g. `MASGSGSG`) represents the BIC of the participating nodes. Edit the `host` and `port` keys accordingly to match the environment nodes.


## Development mode
To run a live server, execute `grunt serve:ubin --env=quorum`.

## Deployment
1. To run in the background, execute the following 

```sh
grunt build:ubin --env=quorum
```

2. Go to the `dist` folder

```sh
cd dist
```

3. Start the http-server in the background (example port is 7001 below)

```sh
nohup http-server -p 7001 &
```

# License

Copyright 2017 The Association of Banks in Singapore

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.