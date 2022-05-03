/**
 * @description 加载所有插件
 * @param app 应用整个实例
 */
export function loadAllPlugins(app:any){
  // const files = require.context('.',true,/\.ts$/); require.context只能在webpack中使用
  const files = import.meta.globEager('./*.ts');
  Object.keys(files).forEach(key => {
    if(typeof files[key].default === 'function'){
      if(key !== './index.ts') files[key].default(app);
    }
  })
}
