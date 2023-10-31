import { Suspense } from "react";
import PeoplePage from "../pages/people";
import Loading from "../components/Loading";

export default function People() {
  return (
    <div id="people">
        <Suspense fallback={<Loading name="People" />}>
            <PeoplePage/>
        </Suspense>
    </div>
  );
}
