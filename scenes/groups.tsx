import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Node, Rect, Layout, Circle} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import { all } from '@motion-canvas/core/lib/flow';

export default makeScene2D(function* (view) {
  const group = createRef<Node>();
  const match = createRef<Rect>();


  view.add(
    <>
      <Layout direction={'column'} width={960} gap={20} layout>
        <Node ref={group} >
          <Rect height={100} fill={'#ff6470'} />
          <Rect height={100} fill={'#ff6470'} />
          <Rect height={100} fill={'#ff6470'} />
          <Rect height={100} fill={'#ff6470'} />
        </Node>
        <Rect ref={match} height={100} fill={'#ff6470'} />
      </Layout>
    </>,
  );

  
  yield* all(
    group().opacity(1, 0).to(.1, 2),
  
  )

 
});



