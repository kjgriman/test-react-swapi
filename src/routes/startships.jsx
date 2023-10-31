import { Suspense } from 'react';
import StartShips from '../pages/startships'
import Loading from '../components/Loading';
export default function StartShip() {
 

  return (
    <div id="startships">
         <Suspense fallback={<Loading name="StartShips" />}>
            <StartShips/>
        </Suspense>
    </div>
  );
}