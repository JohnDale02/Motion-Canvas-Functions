import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle, Rect, Shape} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {all} from '@motion-canvas/core/lib/flow';
// Have to create 2D view 
// Exort 2D function* (view)  {
// }
// Declare constant createRef
// const firstSquare = createRef<Rect>();

export default makeScene2D(function* (view) {
  const rect = createRef<Rect>();
  view.add(
    <> 
    <Layout
        width={1920}
        height={1080}
        direction={'column'}
        gap={28}
        layout
        padding={20}
      >
        <Rect ref={rect} size={200} gap={40} />
      </Layout>
    
    </>

  ); // One liner, different format

yield* rect().scale(1.5, 0.5, easeOutCubic);


// want layout of 5 rectangles
// constant distance between them gap={30}
// switch the positions betwwne them
//Show code on the screen changing its opacity as the aniation plays
// figure out how blocks are connected

