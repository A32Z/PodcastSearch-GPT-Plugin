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
// and then enumerating all of the functio