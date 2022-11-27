import BaseDef from "./BaseDef";

export default class GetLanguagesDef  extends BaseDef {
  apiFunctionName() {
    return 'fetchPodcastLanguages'
  }

  transformResultFunc(result) {
    return result.languages
  }

  openApiPathSpec() {
    const params = {
      operationId: 'getLanguages',
      description: 'Fet