export interface FooterModel{
    snsList:SnsModel[];
    footerMenuList:FooterMenuModel[];
    copyRight:string;
}
export interface FooterMenuModel{
    key:string;
    name:string; 
    url:string;
    target:string;
}
export interface SnsModel{
    icon:string;
    key:string;
    name:string; 
    url:string;
}