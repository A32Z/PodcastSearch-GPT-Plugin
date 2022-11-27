import BaseDef, {OPENAPI_RESPONSE_TMPL} from "./BaseDef";

export default class GetGenresDef  extends BaseDef {
  apiFunctionName() {
    return 'fetchPodcastGenres'
  }

  transformResultFunc(result) {
    return result.genres
  }

  openApiPathSpec() {
    const params = {
      operationId: 'getGenres',
      description: 'Fetch a list of podcast genres. ' +
        'The `id` field can be used in other endpoints as `genre_id` parameter.',
      parameters: [],
      response200: {
        description: 'Returns a list of podcast genres in json format'