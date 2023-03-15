import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle, Shape} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {all} from '@motion-canvas/core/lib/flow';

export default makeScene2D(function* (view) {
  const myCircle = createRef<Circle>();
  const thisCircle = createRef<Circle>();
  const thatCircle = createRef<Circle>();
  const isCircle = createRef<Circle>();
  
  view.add(
    <Circle
      ref={myCircle}
      x={-300}
      width={240}
      height={240}
      fill="#e13238"
    />,
  );

  view.add(
    <Circle
      ref={thisCircle}
      y={-300}
      width={240}
      height={240}
      fill="#da42f5"
    />,
  );

  view.add(
    <Circle
      ref={thatCircle}
      x={300}
      width={240}
      height={240}
      fill="#2efa0a"
    />,
  );

  view.add(
    <Circle
      ref={isCircle}
      y={300}
      width={240}
      height={240}
      fill="#fa0a0a"
    />,
  );


  yield* all(
    myCircle().position.x(300, 1).to(-300, 1),
    myCircle().fill('#e6a700', 1).to('#e13238', 1),

    thisCircle().position.y(300,1).to(-300, 1),
    thisCircle().fill('#4287f5', 1).to('#da42f5', 1),

    thatCircle().position.x(-300, 1).to(300, 1),
    thatCircle().fill('#f2fa0a', 1).to('#2efa0a', 1),

    isCircle().position.y(-300,1).to(300, 1),
    isCircle().fill('#fa0a9e', 1).to('#fa0a0a', 1),
    
  );

 
});

