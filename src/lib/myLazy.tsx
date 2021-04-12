import { lazy } from "react";

// const Tags = lazy(() => import("views/Tags"));

const lazyLoad = (path: string) =>
  lazy(() => {
    return new Promise((resolve) =>
      setTimeout(resolve, 50)
    )
      .then(() => import(`../views/${path}`))
      .catch(() => import("../views/404"));
  });

export { lazyLoad };
