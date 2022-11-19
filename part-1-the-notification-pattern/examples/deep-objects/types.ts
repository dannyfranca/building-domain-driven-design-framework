export type KeysOfDeepObject<T extends Record<string, any>> = T extends Record<
  string,
  any
>
  ? {
      [K in keyof T]: T[K] extends Record<string, any>
        ? K | `${K}.${KeysOfDeepObject<T[K]>}`
        : K;
    }[keyof T]
  : never;
