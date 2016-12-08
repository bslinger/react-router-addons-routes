/*global expect*/
import NamedLink from '../NamedLink'
import RoutesProvider from '../RoutesProvider'
import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter as Router } from 'react-router'

const location = { pathname: '/foo' }

const routes = [
  { pattern: '/',
    name: 'parent',
    routes: [
      { pattern: '/child1',
        name: 'child1'
      },
      { pattern: '/child2/:id',
        name: 'child2'
      }
    ]
  }
]


test('renders correct href for a root route', () => {
  const el = (
    <Router initialEntries={[location]}>
      <RoutesProvider routes={routes}>
        <NamedLink to="parent" />
      </RoutesProvider>
    </Router>
  )
  const tree = renderer.create(el).toJSON()
  expect(tree.props.href).toBe('/')
})

test('renders correct href for a nested route', () => {
  const el = (
    <Router initialEntries={[location]}>
      <RoutesProvider routes={routes}>
        <NamedLink to="child1" />
      </RoutesProvider>
    </Router>
  )
  const tree = renderer.create(el).toJSON()
  expect(tree.props.href).toBe('/child1')
})

test('renders correct href for a nested route with params', () => {
  const el = (
    <Router initialEntries={[location]}>
      <RoutesProvider routes={routes}>
        <NamedLink to="child2" params={{ id: 'test' }} />
      </RoutesProvider>
    </Router>
  )
  const tree = renderer.create(el).toJSON()
  expect(tree.props.href).toBe('/child2/test')
})

