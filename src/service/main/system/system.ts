import commonReq from '../../index'
import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return commonReq.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
