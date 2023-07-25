import request from '@/utils/request';

/** 公共上传 */
export async function getUploadStatus(params: any) {
  return request('//apollo.study.youdao.com/image-service/file/upload/result', {
    method: 'POST',
    params,
  });
}
