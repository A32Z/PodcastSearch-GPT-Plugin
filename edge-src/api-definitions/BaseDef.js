export const OPENAPI_PROPERTIES = {
  episodeSpec: {
    id: {
      type: 'string',
      description: 'the id of the episode, ' +
        'which can be used to pass to the other endpoints that need an episode id as a parameter',
    },
    title: {
      type: 'string',
      description: 'title of the podcast episode',
    },
    description: {
      type: 'string',
      description: 'description of the podcast episode in html',
    },
    image: {
      type: 'string',
      description: 'image url of the podcast episode',
    },
    audio: {
      type: 'string',
      description: 'audio url of the podcast episode, used for playing the audio',
    },
    audio_length_sec: {
      type: 'integer',
      description: 'audio length of the podcast episode in seconds',
    },
    pub_date_ms: {
      type: 'integer',
      description: 'published date of the podcast episode in milliseconds of the Unix epoch',
    },
    listennotes_url: {
      type: 'string',
      description: 'the canonical url of the podcast episode on Listen Notes, ' +
        'which can be used to manually share this episode',
    },
  },
  podcastSpec: {
    id: {
      type: 'string',
      description: 'the id of the podcast, ' +
        'which can be used to pass to the other endpoints that need a podcast id as a parameter',
    },
    title: {
      type: 'string',
      description: 'title of the podcast',
    },
    description: {
      type: 'string',
      description: 'description of the podcast in html',
    },
    publisher: {
      type: 'string',
      description: 'publisher of the podcast',
    },
    image: {
      type: 'string',
      description: 'image url of the podcast',
    },
    listen_score: {
      type: 'integer',
      description: 'Listen Score of the podcast, ' +
        'which indicates the estimated popularity of the podcast (similar to nielsen ratings)',
    },
    listen_score_global_rank: {
      type: 'string',
      description: 'the global rank of the podcast according to Listen Score',
    },
    listennotes_url: {
      type: 'string',
      description: 'the canonical url of the podcast on Listen Notes, ' +
        'which can be used to manually share this podcast',
    },
    latest_episode_id: {
      type: 'string',
      description: 'the id of the latest episode of the podcast, ' +
        'which can be used to fetch detailed metadata of the episode using the `getEpisode` endpoint',
    },
    latest_pub_date_ms: {
      type: 'integer',
      description: 'published date of the latest episode of this podcast in milliseconds of the Unix epoch',
    },
    update_frequency_hours: {
      type: "integer",
      description: "How frequently does this podcast release a new episode? In hours. " +
        "For example, if the value is 166, then it's every 166 hours (or weekly).",
    },
    audio_length_sec: {
      type: "integer",
      description: "Average audio length of all episodes of this podcast. In seconds.",
    },
    total_episodes: {
      type: "integer",
      description: "Total number of episodes in this podcast.",
    },
    earliest_pub_date_ms: {
      type: "integer",
      description: "The published date of the oldest episode of this podcast. In milliseconds",
    },
  },
}

export const OPENAPI_PARAMETERS = {
  q: {
    "name": "q",
    "in": "query",
    "description": "A keyword to search, which could be person, place, topic..." +
      "You can use double quotes to do verbatim match, e.g., \"game of thrones\". Otherwise, it's fuzzy search.",
    "required": true,
    "schema": {
      "type": "string",
    },
  },
  sort_by_date: {
    "name": "sort_by_date",
    "in": "query",
    "description": "Sort by published date or not? If 0, then sort by relevance. If 1, then sort by published date.",
    "required": false,
    "schema": {
      "type": "integer",
      "default": 0,
      "enum": [
        0,
        1,
      ]
    }
  },
  len_min: {
    "name": "len_min",
 