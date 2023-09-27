# Picture Match Game

This is a small [picture match game](https://picture-match-game-five.vercel.app/)

## Building Blocks

- This application using [React](https://react.dev/), [NextJs](https://nextjs.org/) and [Tailwind](https://v1.tailwindcss.com/) as building blocks.
- It also fetch their images from [Unsplash](https://unsplash.com/) website.
- This project's uses [Vercel](https://vercel.com/) for deployment and has a auto-deployment on merging to the main branch

## Structure

- The main and only page is available in the `app` directory with file name of `page.js`
- The game compoents are availabe and seprated by different directories into the `components`
- The game states data and changes are handled by a custom react hook, names `useGame` which can be find in the `components > GameStateManagment > useGame.js`
- The `useGame` data and action handlers are provided by different game element by 2 seprate react context, one of them for access to the game data and the other one for running some actions and change the game data. Both of them provide by a single react provider which are available on `components > GameStateManagment > gameProvider.js`

## Configuration

Since this app using the Unsplash developer api, it needed the Unsplash developer access key to be available in `.env` environment with name of `NEXT_PUBLIC_API_ACCESS_KEY`. [Read more how to obtain an access key](https://unsplash.com/documentation#authorization)

After setting the `.env` file with the access key, by running `yarn install && yarn run dev` you can run the app in your system

## Release

The latest version of the app is also up and running and available in [picture-match-game-five.vercel.app](https://picture-match-game-five.vercel.app/)
