import ajax from './ajax'
//搜索的数据内容
export const reqInit=()=>ajax('/sp/xhr/search/init.json?csrf_token=4aa69942c452c294d4be7cf515eb4b53')
//实时发送搜索
export const reqSearch=(keywordPrefix)=>ajax('/sp/xhr/search/searchAutoComplete.json?csrf_token=4aa69942c452c294d4be7cf515eb4b53',{keywordPrefix})