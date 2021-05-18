export default function resize () {
  const wideSizeStandard = {
    width: 1230,
    fontSize: 18
  }
  const sizeStandard = {
    width: 991,
    fontSize: 31
  }
  const docEl = document.documentElement
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'

  const reCalc = () => {
    const cWidth = docEl.clientWidth
    if (!cWidth) return
    const fontSizeCal = (data) => {
      const sizeCal = data.fontSize * (cWidth / data.width)
      const size = Math.round(sizeCal)
      docEl.style.fontSize = `${size < 11 ? 11 : size}px`
    }
    if (cWidth <= sizeStandard.width) {
      fontSizeCal(sizeStandard)
    } else if (cWidth > sizeStandard.width && cWidth <= wideSizeStandard.width) {
      fontSizeCal(wideSizeStandard)
    } else {
      docEl.style.fontSize = `${wideSizeStandard.fontSize}px`
    }
  }

  if (!document.addEventListener) return
  window.addEventListener(resizeEvt, reCalc, false)
  document.addEventListener('DOMContentLoaded', reCalc, false)
}
