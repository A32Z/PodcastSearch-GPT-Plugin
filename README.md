# Podcast Search GPT Plugin\n\nThis repository contains the source code for the Podcast Search GPT plugin. This plugin is built with [PodcastAPI.com](https://www.podcastapi.com/) and deployed on serverless Cloudflare Pages using JavaScript. It allows users to interact with the Listen Notes Podcast Database through the ChatGPT interface. Users can search for podcasts, find episodes, get recommendations, and more.\n\n## Table of Contents\n\n- [Using the Plugin](#using-the-plugin)\n- [Running Locally](#running-locally)\n- [Deploying to Production](#deploying-to-production)\n- [Adapting the Plugin](#adapting-the-plugin)\n\n## Using the Plugin\n\nTo use the Podcast Search GPT plugin, you'll need to enable the plugin on [chat.openai.com](https://chat.openai.com/) first:\n\nYou can try prompts like these:\n* "what are some recent podcast episodes talking about Sam Altman, in English"\n* "give me a random podcast episode to listen"\n* "how many episodes does the daily podcast have"\n* "有哪些好的中文播客，关于犯罪的"\n* "find me some podcasts about charles manson"\n\n## Running Locally\n\nTo run this repo on your local development environment, follow these steps:\n\n**0) Install [Cloudflare Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/)**\n\n**1) Clone the repository to your local machine.**\n\n**2) Install the necessary dependencies.**\n\n**3) Create a `.dev.vars` file in the root directory of this project (at the same level as package.json).**\n\n**4) Test the proxy endpoints**\n\n## Adapting the Plugin\n\nThis plugin can be adapted to work with other APIs. To do this, you'll need to modify the endpoints and the corresponding functions in the code.\n\n### Deploying to Production\n\nTo deploy the Podcast Search GPT plugin to production on [Cloudflare Pages](https://pages.cloudflare.com/), follow these steps:\n\n1) **[Create a Cloudflare Pages project](https://dash.cloudflare.com/sign-up/workers-and-pages)**\n\n2) **[Test on chat.openai.com](https://chat.openai.com/)**\n\n### Submit for review\n\nTo list your plugin on the Plugin Store, please refer to the guidelines provided on [this page](https://platform.openai.com/docs/plugins/review) for submitting your plugin for review.\n