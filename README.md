# wails-react-shadcn

Wails starter template with React + ShadcnUI + react-router-dom + Typescript frontend setup.

## Using the template

```sh
wails init -n project_name -t https://github.com/tbdsux/wails-react-shadcn.git

cd project_name

wails dev
```

### More Details

- Routing
  Wails recommends using hash routers for react. (<https://wails.io/docs/guides/routing#react>)

  <https://reactrouter.com/en/main/routers/create-hash-router>

  <https://reactrouter.com/en/main/router-components/hash-router>

- Shadcn
  Adding components

  <https://ui.shadcn.com/docs/cli#add>

  ```
  npx shadcn-ui@latest add [component]
  ```

## Live Development

To run in live development mode, run `wails dev` in the project directory. In another terminal, go into the `frontend`
directory and run `npm run dev`. The frontend dev server will run on <http://localhost:34115>. Connect to this in your
browser and connect to your application.

## Building

To build a redistributable, production mode package, use `wails build`.
