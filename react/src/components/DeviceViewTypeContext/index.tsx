import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { IResponsiveSize, DeviceViews, IResponsiveInfo } from '../../interfaces/IResponsiveSize';

//const { Provider, Consumer } = createContext<IResponsiveInfo | null>(null);
const mobileWidth = 700;

const windowDims = (initHeight: number, initWidth: number): IResponsiveSize => ({
  height: initHeight,
  width: initWidth,
  deviceView: initWidth <= mobileWidth? DeviceViews.Mobile : DeviceViews.Desktop
});

const initWindowDims = windowDims(window.innerHeight, window.innerWidth);
console.log("Digvijay Checking");
console.log(initWindowDims);

const DeviceViewTypeContext = createContext<IResponsiveInfo>({
  startupSize: initWindowDims,
  currentSize: initWindowDims
  });

const DeviceViewTypeProvider: React.FunctionComponent<ReactNode> = ({ children }) => {
  const [currentDimensions, setCurrentDimensions] = useState<IResponsiveSize>(initWindowDims);

  useEffect(() => {
    const handleResize = () => {
      setCurrentDimensions(windowDims(window.innerHeight, window.innerWidth));
    }
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])
  return (
    <DeviceViewTypeContext.Provider value={{startupSize: initWindowDims, currentSize: currentDimensions}}>
      {children}
    </DeviceViewTypeContext.Provider>
  )
}

const DeviceViewTypeConsumer = DeviceViewTypeContext.Consumer;
const deviceViewTypeContext = () => {
  return useContext(DeviceViewTypeContext)
}

export {DeviceViewTypeProvider, DeviceViewTypeConsumer, DeviceViewTypeContext};