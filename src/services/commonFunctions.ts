/* eslint-disable max-len */
import { Dimensions, PixelRatio } from 'react-native'
import { path, pathOr } from 'ramda'

const designResolution = {
  width: 960,
  height: 600,
}
export const screenWidth = Dimensions.get('window').width
export const screenHeight = Dimensions.get('window').height

export const perfectWidth = (pixel: number) =>
  screenWidth / (designResolution.width / PixelRatio.roundToNearestPixel(pixel))

export const perfectHeight = (pixel: number) => PixelRatio.roundToNearestPixel(pixel)

export const getAppVersion = () => {
  // add the lamda URL here
  const feesLamda = ''
  return fetch(feesLamda, {
    method: 'GET',
  })
}

export const perfectSize = (size: number) => PixelRatio.roundToNearestPixel(size)

export const isSmallDevice = () => screenHeight <= 480
