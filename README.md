# Amazon Redesign

My take of an Amazon website redesign using [Svelte](https://svelte.dev).

## Get started

Install the dependencies...

```bash
yarn
```

...then start the app:

```bash
yarn dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Building and running in production mode

To create an optimised version of the app:

```bash
yarn build
```

You can run the newly built app with `yarn start`, using [sirv](https://github.com/lukeed/sirv).
