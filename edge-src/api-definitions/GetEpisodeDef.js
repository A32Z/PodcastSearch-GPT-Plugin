import BaseDef, {OPENAPI_PARAMETERS, OPENAPI_RESPONSE_TMPL} from "./BaseDef";

export default class GetEpisodeDef  extends BaseDef {
  apiFunctionName() {
    return 'fetchEpisodeById'
  }

  transformResultFunc(result) {
    return ({
      id: result.id,
      title: result.title,
      description: result.description,
      image: result.image,
      audio: result.audio,
      audio_length_sec: result.audio_length_sec,
      pub_date_ms: result.pub_date_ms,
      listennotes_url: result.listennotes_url,
      podcast: {
        id: result.podcast.id,
        title: result.podcast.title,
        publisher: result.podcast.publisher,
        image: result.podcast.image,
        listen_score: result.podcast.listen_score,
        listen_score_global_rank: result.podcast.listen_score_global_rank,
        listennotes_url: result.po