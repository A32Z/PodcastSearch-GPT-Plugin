import BaseDef, {OPENAPI_PARAMETERS, OPENAPI_RESPONSE_TMPL} from "./BaseDef";

export default class GetEpisodeDef  extends BaseDef {
  apiFunctionName() {
    return 'fetchEpisodeById'
  }

  transformResultFunc(result) {
    return ({
     