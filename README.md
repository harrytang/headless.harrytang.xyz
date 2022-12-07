# headless.harrytang.xyz

## Developmemnt

How to run npm install ?

```bash
docker compose run --rm -ti strapi npm i
```

## k8s config

```bash
kubectl create secret docker-registry regcred --docker-server=ghcr.io --docker-username=harrytang --docker-password=xxx -n harrytang-xyz
kubectl create secret generic env --from-env-file=./.env.prod -n harrytang-xyz
```

## S3 config

- Uncheck `Block all public access`
- Check `ACLs enabled`
- Cross-origin resource sharing (CORS)

  ```json
  [
    {
      "AllowedHeaders": [],
      "AllowedMethods": ["GET", "PUT", "POST", "DELETE", "HEAD"],
      "AllowedOrigins": ["*"],
      "ExposeHeaders": []
    }
  ]
  ```
