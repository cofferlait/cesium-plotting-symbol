import Polyline from './Polyline.js'
import Cesium from 'cesium/Source/Cesium.js'
import * as mu from '../mapUtil.js'
import * as turf from '@turf/turf'

export default class BezierSpline extends Polyline {
  
  constructor(){
    super()
    this.props.type.value = '平滑bezier曲线'
  }

  calcuteShape (points, time) {
    let linestr = points.map((p) => mu.cartesian2lonlat(p.position.getValue(time)))
    let line = turf.lineString(linestr)
    let curved = turf.bezierSpline(line)
    let geometry = curved.geometry.coordinates
    return geometry.map((p) => mu.lonlat2Cartesian(p))
  }
}