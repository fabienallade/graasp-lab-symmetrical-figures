import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Stage } from 'react-konva';
import Triangle from '../triangle/Triangle';
import Points from '../points/Points';
import Liner from '../liner/Liner';
import Axes from '../axes/Axes';
import MidPoint from '../axes/MidPoint';
import { AppState } from '../../config/AppState';

class TriangleView extends Component {
  static propTypes = {
    showPoints: PropTypes.bool.isRequired,
    toggleLine: PropTypes.bool.isRequired,
    nodeB: PropTypes.shape({
      A: PropTypes.string.isRequired,
      B: PropTypes.string.isRequired,
      C: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = AppState;

  handleLineChange = (newLinePoints) => {
    this.setState({
      linePoints: newLinePoints,
    });
  }

  handleTriangleChange = (newTriangle) => {
    this.setState({
      triangleA: newTriangle,
    });
  }

  handleDragMoveOne = (e) => {
    const { linePoints } = this.state;
    const newLinePoints = [...linePoints];
    newLinePoints[2] = e.target.x();
    newLinePoints[3] = e.target.y();
    this.handleLineChange(newLinePoints);
  }

  handleDragMove = (e) => {
    const { linePoints, triangleA } = this.state;
    const newLinePoints = [...linePoints];
    const newTriangleAPoints = [...triangleA];
    newLinePoints[0] = e.target.x();
    newLinePoints[1] = e.target.y();
    const newTriangle = newTriangleAPoints.map(({ x, y }) => ({
      x: x + e.target.x(),
      y: y + e.target.y(),
    }));
    this.handleLineChange(newLinePoints);
    this.handleTriangleChange(newTriangle);
  }

  render() {
    const {
      axePointsOne,
      axePointsTwo,
      axePointsThree,
      axeStroke,
      axeStrokeWidth,
      circlePoints,
      circleRadius,
      color,
      height,
      linePoints,
      lineAxeOne,
      lineAxeTwo,
      lineAxeThree,
      lineStroke,
      lineStrokeWidth,
      midPointStroke,
      midPointStrokeWidth,
      midPointShadowBlur,
      midPointRadius,
      nodeA,
      pointSize,
      shapeStroke,
      triangleA,
      triangleB,
      triangleOpacity,
      triangleStroke,
      triangleShadowBlur,
      triangleStrokeWidth,
      width,
    } = this.state;

    const { showPoints, nodeB, toggleLine } = this.props;

    return (
      <div className="triangle-content">
        { toggleLine ? (
          <Stage width={width} height={height}>
            <MidPoint
              circlePoints={circlePoints}
              color={color}
              shadowBlur={midPointShadowBlur}
              stroke={midPointStroke}
              strokeWidth={midPointStrokeWidth}
              radius={midPointRadius}
            />
            <Axes
              axePointsOne={axePointsOne}
              axePointsTwo={axePointsTwo}
              axePointsThree={axePointsThree}
              stroke={axeStroke}
              strokeWidth={axeStrokeWidth}
            />
          </Stage>
        )
          : (
            <Stage width={width} height={height}>
              <Liner
                color={color}
                handleDragMove={this.handleDragMove}
                handleDragMoveOne={this.handleDragMoveOne}
                lineAxeOne={lineAxeOne}
                lineAxeTwo={lineAxeTwo}
                lineAxeThree={lineAxeThree}
                linePoints={linePoints}
                lineStroke={lineStroke}
                radius={circleRadius}
                shadowBlur={triangleShadowBlur}
                strokeWidth={lineStrokeWidth}
              />
            </Stage>
          )
        }
        { showPoints ? (
          <Stage width={width} height={height}>
            <Points
              color={color}
              fontSize={pointSize}
              node={nodeA}
              points={
                [
                  { x: triangleA[0].x, y: triangleA[0].y },
                  { x: triangleA[1].x, y: triangleA[1].y },
                  { x: triangleA[2].x, y: triangleA[2].y },
                ]
              }
            />
            <Points
              color={color}
              fontSize={pointSize}
              node={nodeB}
              points={
                [
                  { x: triangleB[0].x, y: triangleB[0].y },
                  { x: triangleB[1].x, y: triangleB[1].y },
                  { x: triangleB[2].x, y: triangleB[2].y },
                ]
              }
            />
          </Stage>
        ) : ''
        }
        <Stage width={width} height={height}>
          <Triangle
            color={color}
            nodeA={nodeA}
            opacity={triangleOpacity}
            points={
              [
                { x: triangleA[0].x, y: triangleA[0].y },
                { x: triangleA[1].x, y: triangleA[1].y },
                { x: triangleA[2].x, y: triangleA[2].y },
              ]
            }
            radius={circleRadius}
            shadowBlur={triangleShadowBlur}
            shapeStroke={shapeStroke}
            stroke={triangleStroke}
            strokeWidth={triangleStrokeWidth}
          />

          <Triangle
            color={color}
            linePoints={linePoints}
            nodeB={nodeB}
            opacity={triangleOpacity}
            points={
              [
                { x: triangleB[0].x, y: triangleB[0].y },
                { x: triangleB[1].x, y: triangleB[1].y },
                { x: triangleB[2].x, y: triangleB[2].y },
              ]
            }
            radius={circleRadius}
            shadowBlur={triangleShadowBlur}
            shapeStroke={shapeStroke}
            stroke={triangleStroke}
            strokeWidth={triangleStrokeWidth}
          />
        </Stage>
      </div>
    );
  }
}


export default TriangleView;
