const getProperty = <T, V extends keyof T>(person: T, property: V): T[V] =>
  person[property];
