import { ObjectCannedACL } from '@aws-sdk/client-s3';

export interface UploadFileInterface {
  name: string;
  data?: Buffer;
  path?: string;
  ACL?: ObjectCannedACL;
  ContentType?: string;
  subDir?: string;
  rootPath?: string;
}
