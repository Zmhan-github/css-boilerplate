import './styles.css'
import Snap from 'snapsvg-cjs'

paper = Snap 800, 400


wrapperSvg = document.getElementById 'svg-wrapper'
wrapperSvg.appendChild paper.node

paper.click (e) ->
  if e.target.tagName is 'svg'
    paper
      .circle e.offsetX, e.offsetY, 10
      .attr
        fill: '#1ce'
        stroke: '#333'
        strokeWidth: '5'
      .drag()
