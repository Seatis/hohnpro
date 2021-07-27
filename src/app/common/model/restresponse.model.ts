import {PostResponse} from './postresponse.model';

export interface RestResponse<T> extends PostResponse {
  data?: T;
}
