/**
 *  系统的全局设置size，全部加载方便设置。
 *  如需按需加载:
 *  1.放开注释
 *  2.引入babel-plugin-component库
 *  3.放开babel.config 注释
 */
import ElementPlus from 'element-plus';
import 'element-theme-chalk/lib/index.css';
import 'element-theme-chalk/lib/display.css';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import 'dayjs/locale/zh-cn';

import AppStoreModule from '@/store/modules/app';

export default function loadComponent(app: any) {
  app.use(ElementPlus, {locale, size: AppStoreModule.size});
}
