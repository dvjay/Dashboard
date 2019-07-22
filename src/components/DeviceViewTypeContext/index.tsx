import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { IResponsiveSize, DeviceViews, IResponsiveInfo } from '../../interfaces/IResponsiveSize';

//const { Provider, Consumer } = createContext<IResponsiveInfo | null>(null);
const DeviceViewTypeContext = createContext<IResponsiveInfo | null>(null);

const mobileWidth = 700;

const windowDims = (initHeight: number, initWidth: number): IResponsiveSize => ({
  height: initHeight,
  width: initWidth,
  deviceView: initWidth <= mobileWidth? DeviceViews.Mobile : DeviceViews.Desktop
})

const DeviceViewTypeProvider: React.FunctionComponent<ReactNode> = ({ children }) => {
  const [initDimensions] = useState<IResponsiveSize>(windowDims(window.innerHeight, window.innerWidth));
  const [currentDimensions, setCurrentDimensions] = useState<IResponsiveSize>(windowDims(window.innerHeight, window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setCurrentDimensions(windowDims(window.innerHeight, window.innerWidth));
    }
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])
  return (
    <DeviceViewTypeContext.Provider value={{startupSize: initDimensions, currentSize: currentDimensions}}>
      {children}
    </DeviceViewTypeContext.Provider>
  )
}

const DeviceViewTypeConsumer = DeviceViewTypeContext.Consumer;
const useDeviceViewTypeContext = () => {
  return useContext(DeviceViewTypeContext)
}

export {DeviceViewTypeProvider, DeviceViewTypeConsumer, useDeviceViewTypeContext};