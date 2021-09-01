function routeCreator(options) {
  const creator = (opts) => {
    const router = opts.map(opt => {
      return {
        path: opt.path,
        name: opt.name,
        component: opt.component,
        meta: {
          title: opt.title,
        },
        props: {
          label: opt.label,
        },
        children: opt.children ? creator(opt.children) : undefined
      }
    })
    return router;
  }
  
  return creator(options);
}

export default routeCreator;