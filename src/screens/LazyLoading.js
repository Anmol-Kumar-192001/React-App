import React, { Suspense, lazy } from 'react'

const Home = lazy(() => import('../components/LazyLoading/Home'))
const About = lazy(() => import('../components/LazyLoading/About'))

export default function LazyLoading() {
    return (
        <div>
            <h1>Lazy Loading</h1>
            <Suspense fallback={<div>please wait...Home is loading</div>}>
                <Home />
            </Suspense>
            <Suspense fallback={<div>please wait...About is loading</div>}>
                <About />
            </Suspense>

        </div>
    )
}
