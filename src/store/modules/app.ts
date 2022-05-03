import store from '@/store';
import { getModule, Module, VuexModule } from 'vuex-module-decorators';

// export enum DeviceType {
//   Mobile,
//   Desktop
// }

@Module({
  name: 'apps',
  dynamic: true,
  namespaced: true,
  store
})
class AppStore extends VuexModule{
  size = 'medium'
}

export default getModule(AppStore);
