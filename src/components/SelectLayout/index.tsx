import * as React from 'react';
import { useDeviceViewTypeContext } from '../DeviceViewTypeContext';
import { DeviceViews, IResponsiveInfo} from '../../interfaces/IResponsiveSize';

const SelectLayout: React.FunctionComponent<any> = ({ renderMobile, renderDesktop }) => {
  const { startupSize } = useDeviceViewTypeContext() as IResponsiveInfo;
  return startupSize.deviceView === DeviceViews.Mobile  ? renderMobile() : renderDesktop();
}

export default SelectLayout;