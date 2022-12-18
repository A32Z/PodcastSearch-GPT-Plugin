import BaseDef, {OPENAPI_PARAMETERS, OPENAPI_RESPONSE_TMPL} from "./BaseDef";

export default class SearchEpisodesDef  extends BaseDef {
  apiFunctionName() {
    return 'search'
  }

  transformResultFunc(result) {
    return result.results.map((item) => ({
      id: item.id,
      title: item.title_original,
      description: item.description_original,
      audio: item.audio,
      audio_length_sec: item.audio_length_sec,
      pub_date_ms: item.pub_date_ms,
      image: item.image,
      listennotes_url: item.listennotes_url,
      podcast: {
        id: item.podcast.id,
     