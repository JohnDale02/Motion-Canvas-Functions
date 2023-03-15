import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle, Shape} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {all} from '@motion-canvas/core/lib/flow';


export default makeScene2D(function* (view) {
  const circle = createRef<Circle>();
  view.add(<Circle ref={circle} width={100} height={100} />);

  

function* flicker(circle: Circle): Generator {
  circle.fill('red');
  yield;
  circle.fill('blue');
  yield;
  circle.fill('red');
  yield;
}


yield* flicker(circle());
});

