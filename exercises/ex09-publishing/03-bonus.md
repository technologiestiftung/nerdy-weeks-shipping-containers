# Exercise 9 Publishing


## GitHub Container Registry (GHCR)

### Build and Push

To have your image up on GHCR you will have to tag your image with the `ghcr.io` prefix.

```bash
docker build --tag ghcr.io/technologiestiftung/whalesay .
```

Finally you can push it to your org.

```bash
docker push ghcr.io/technologiestiftung/whalesay:latest
```