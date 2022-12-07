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
      audio_length