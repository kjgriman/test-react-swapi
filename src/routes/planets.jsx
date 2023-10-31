import { Suspense } from 'react';
import PlanetsPage from '../pages/planets'
import Loading from '../components/Loading';
export default function Planets() {
 

  return (
    <div id="planets">
        <Suspense fallback={<Loading name="Planets" />}>
            <PlanetsPage/>
        </Suspense>
    </div>
  );
}
