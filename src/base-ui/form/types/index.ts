type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  // 字段
  field: string
  // 类名
  type: IFormType
  // 标题
  label: string
  // 规则
  rules?: any[]
  // 提示
  placeholder?: any
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
