import * as React from 'react';
import { useDeviceViewTypeContext } from '../DeviceViewTypeContext';
import { DeviceViews, IResponsiveInfo} from '../../interfaces/IResponsiveSize'

// const windowDims = (): IDimnensions => ({
// 	height: window.innerHeight,
// 	width: window.innerWidth,
//   });
//
const SelectLayout: React.FunctionComponent<any> = ({ renderMobile, renderDesktop }) => {
  const { startupSize } = useDeviceViewTypeContext() as IResponsiveInfo;
  return startupSize.deviceView === DeviceViews.Mobile  ? renderMobile() : renderMobile();
}

export default SelectLayout;