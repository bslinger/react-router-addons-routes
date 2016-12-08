/*global expect*/
import MatchWithRoutes from '../MatchWithRoutes'
import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter as Router } from 'react-router'

test('passes routes in as a prop', () => {
  const location = { pathname: '/foo' }
  const route = {
    pattern: '/foo',
    routes: [
      { pattern: '/child' }
    ],
    component: ({ routes }) => (
      <div>{routes[0].pattern}</div>
    )
  }
  const el = (
    <Router initialEntries={[location]}>
      <MatchWithRoutes {...route} />
    </Router>
  )
  const tree = renderer.create(el).toJSON()
  expect(tree.children[0]).toBe(route.routes[0].pattern)
})

