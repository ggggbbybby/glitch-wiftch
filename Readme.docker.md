### Building and running your application

When you're ready, start your application by running:
`docker compose up --build`.

Your application will be available at http://localhost:12321.

### Deploying your application to the cloud

First, build your image, e.g.: `docker build -t myapp .`.
If your cloud uses a different CPU architecture than your development
machine (e.g., you are on a Mac M1 and your cloud provider is amd64),
you'll want to build the image for that platform, e.g.:
`docker build --platform=linux/amd64 -t myapp .`.

Then, push it to your registry, e.g. `docker push myregistry.com/myapp`.

Consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/)
docs for more detail on building and pushing.

Note to Self:
if you want to put this on dockerhub for public use (which is almost certainly why you're doing this)
here are the steps:
```
docker build -t ggggbbybby/glitch-wiftch

docker push ggggbbybby/glitch-wiftch
```

### References
* [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)