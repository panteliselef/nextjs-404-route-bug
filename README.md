# Demo of next headers() breaking 404 routing

### How to build
```
yarn
yarn build
yarn start
```

To reproduce:
1. Build and serve the app
1. Click the link to go to 404 page. 1 
1. From the 404 page, attempt to go back to the `/` root via the `<Link>` in the navbar

To fix:
1. Remove `headers()` from `RootLayout` 

## Interaction GIF 

![2024-01-06 15 34 33](https://github.com/JacobJaffe/clerk-nextjs-404-routing-demo/assets/25315679/65581158-b7b9-4e10-895a-c93c09c7d83b)
