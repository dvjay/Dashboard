import IDimensions from "./IDimensions";

export interface IResponsiveSize extends IDimensions{
    height: number;
    width: number;
    deviceView: DeviceViews;
}

export enum DeviceViews {
    Mobile = 1,
    Desktop
}

export interface IResponsiveInfo{
    startupSize: IResponsiveSize,
    currentSize: IResponsiveSize
} 