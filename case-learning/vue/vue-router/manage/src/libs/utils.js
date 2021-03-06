function formatRouterTree(data) {
  let parents = data.filter(p => p.pid === 0)
  let child = data.filter(c => c.pid !== 0)
  data2Tree(parents, child)
  function data2Tree(parents, child) {
    parents.map(p => {
      child.map((c, i) => {
        if (c.pid == p.id) {
          let _c = JSON.parse(JSON.stringify(child))
          _c.splice(i, 1)

          data2Tree([c], _c)

          if (p.children) {
            p.children.push(c)
          } else {
            p.children = [c]
          }
        }
      })
    })
  }

  return parents
}

function generateRouter(userRouters) {
  return userRouters.map(r => {
    let routes = {
      path: r.path,
      name: r.name,
      component: () => import(`@/views/${r.name}`)
    }

    if (r.children) {
      routes.children = generateRouter(r.children)
    }
    return routes
  })
}

export { formatRouterTree, generateRouter }
