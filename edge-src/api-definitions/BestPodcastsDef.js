import BaseDef, {OPENAPI_PARAMETERS, OPENAPI_RESPONSE_TMPL} from "./BaseDef";

export default class BestPodcastsDef  extends BaseDef {
  apiFunctionName() {
    return 'fetchBestPodcasts'
  }

  transformResultFunc(result) {
    return result.podcasts.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      listennotes_url: item.listennotes_url,
      publisher: item.publisher,
      image: item.image,
      latest_episode_id: item.latest_episode_id,
      latest_pub_date_ms: item.latest_pub_date_ms,
      earliest_pub_date_ms: 1482664380160,
      total_episodes: item.total_episodes,
      audio_length_sec: item.audio_length_sec,
      update_frequency_hours: ite