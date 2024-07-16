---
sidebar_position: 5
---

# Upgrading from 1.x

## Breaking changes

Fortunately, this release has fully backward compatibility with `1.x.x` release. But I'd like to highlight some important changes:

- `require` property in `register` function now marked as deprecated and will be removed in future releases.

:::tip
Use new syntax and `loader` property instead.
:::

- `investigate` returns only initially loaded modules.

:::info
This behavior was originally planned, but as it turned out, if you call this function at different times of execution of your application, it will show different results, since some modules will be loaded. Thus, the results are not deterministic and can be confusing. Therefore, now this function returns only those modules that are loaded when the application starts.
:::

- screen gets mounted in `async` way.

:::info
Earlier, if navigation occurred to a screen that had not yet been loaded, the application would freeze, and the transition occurred only when the screen was actually loaded. This was undesirable behavior, so now, the transition will occur immediately, but if the screen is not cached yet, you will see a blank screen and as soon as it loads, you will actually see it. To avoid this use the `preload` API or `placeholder` option in `register` function.);
:::

## Migration

If you used the API of the library correctly before, then there will be no changes for you and you can migrate to the second version.

However, after updating to newest version you will get warnings, about the fact, that you should use **`loader` instead of `require`**.

If you want ot get rid off of that, you can do a quick migration. Just replace next expression `require: () => require(` to `loader: () => import(` expression. All modern IDEs allow you to do it for all project. That's all. Congratulations 🎉