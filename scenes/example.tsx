import {makeScene2D} from '@motion-canvas/2d';
import {waitUntil} from '@motion-canvas/core/lib/flow';
import {Layout, Rect, Txt, Node} from '@motion-canvas/2d/lib/components';
import {createRef, makeRef, useScene} from '@motion-canvas/core/lib/utils';
import {easeOutCubic, map} from '@motion-canvas/core/lib/tweening';
import {createSignal} from '@motion-canvas/core/lib/signals';
import {Direction, Spacing} from '@motion-canvas/core/lib/types';
import {slideTransition} from '@motion-canvas/core/lib/transitions';
import { Vector2 } from '@motion-canvas/core/lib/types';

export default makeScene2D(function* (view) {
  const label = createRef<Txt>();
  const size = createSignal(1);
  const group = createRef<Node>();

  const rects: Rect[] = [];
  const animate = (from: number, to: number) => () => map(from, to, size());

  view.add(
    <>
      <Layout layout
        width={1920}
        height={1080}
        direction={'row'}
        gap={28}
        padding={20}
        alignItems={'center'}
        justifyContent={'space-evenly'}
      >
        <Node ref={group}>
          <Rect ref={makeRef(rects, 0)} size={300} />
        </Node>
          <Rect ref={makeRef(rects, 1)} size={300} />
        <Node ref={group}>
          <Rect ref={makeRef(rects, 2)} size={300} />
        </Node>
       
        <Rect ref={makeRef(rects, 3)} size={300} />
        <Rect ref={makeRef(rects, 4)} size={300} />
      </Layout>

      <Txt
        ref={label}
        fontSize={120}
        lineHeight={120}
        fontFamily={'JetBrains Mono'}
        fill={'rgba(255, 255, 255, 0.6)'}
      />
    </>,
  );

  for (let i = 0; i < rects.length; i++) {
    const rect = rects[i];
    rect.lineWidth(8);
    rect.stroke(i === 2 ? '#99C47A' : '#242424');
    rect.radius(new Spacing(8));
  }

  yield* slideTransition(Direction.Bottom, 1);

  yield label().text('LAYOUTS', 2);
  yield size(0, 2).to(1, 2);
  
  yield* waitUntil('swap');

  const firstPosx = rects[0].position.x();
  const firstPosy = rects[0].position.y();

  yield* rects[0].opacity(1, 0).to(.1, 2);


  yield *
  group().position(
    new Vector2(firstPosx, firstPosy),
    2,
    easeOutCubic,
  );


  yield* rects[2].opacity(1,0).to(.1,2);
  
});