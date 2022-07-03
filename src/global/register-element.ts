import { App } from 'vue'
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabPane,
  ElTabs,
  ElCheckbox
} from 'element-plus'

export default function (app: App): void {
  const components = [
    ElButton,
    ElTable,
    ElAlert,
    ElAside,
    ElAutocomplete,
    ElAvatar,
    ElBacktop,
    ElBadge,
    ElTabPane,
    ElTabs,
    ElCheckbox
  ]
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
