import BaseDef, {OPENAPI_PARAMETERS, OPENAPI_RESPONSE_TMPL} from "./BaseDef";

export default class GetPodcastDef  extends BaseDef {
  apiFunctionName() {
    return 'fetchPodcastById'
  }

  transformResultFunc(result) {
    const newResult = {
      id: result.id,
      title: result.title,
      description: result.description,
      listennotes_url: result.listennotes_url,
      publisher: result.publisher,
      image: result.image,
      latest_episode_id: result.latest_episode_id,
      latest_pub_date_ms: result.latest_pub_date_ms,
      total_episodes: result.total_episodes,
      audio_length_sec: result.audio_length_sec,
      update_frequency_hours: result.update_frequency_hours,
      listen_score: result.listen_score,
      listen_score_global_rank: result.listen_score_global_rank,
      episodes: [],
    }
    newResult.episodes = result.episodes.map(e => ({
      id: e.id,
      title: e.title,
      description: e.description,
      image: e.image,
      audio: e.audio,
      audio_length_sec: e.audio_length_sec,
      pub_date_ms: e.pub_date_ms,
      listennotes_url: e.listennotes_url,
    }))
    return newResult
  }

  openApiPathSpec() {
    const params = {
      operationId: 'getPodc