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
      description: 'the canonical url