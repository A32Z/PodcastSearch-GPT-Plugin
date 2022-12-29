/**
 * Learn chatgpt plugins: https://platform.openai.com/docs/plugins/introduction
 */

import ResponseBuilder from "../../../edge-src/common/ResponseBuilder";

// 100 character max
const descriptionForHuman = "The best podcast search engine and database. All podcasts and episodes. " +
  "Built with PodcastAPI.com."

// 8,000 character max
// Instruct the model on how to use your plugin generally
// Use natural language, preferably in a concise yet descriptive and objective tone.
// We suggest starting the description_for_model with “Plugin for …”
// and then enumerating all of the functionality that your API provides.
// Best practices: https://platform.openai.com/docs/plugins/getting-started/best-practices
const descriptionForModel = 'Plugin for discovering podcasts and episodes.\n ' +
  '- When asked for searching podcasts, use the `searchPodcasts` endpoint\n ' +
  '- when asked for searching episodes or interviews, use the `searchEpisodes` endpoint\n ' +
  '- When asked for top podcasts or best podcasts or podcast recommendations, ' +
  'use the `getBestPodcasts` endpoint first; if no results, then try the `searchPodcasts` endpoint\n ' +
  '- When you need category or genres id, us