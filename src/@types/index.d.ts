declare module '*.pcss' {
  const content: any;
  export = content;
}

declare module 'bundle-loader?lazy&name=[hash:6]!*' {
  const content: any;
  export = content;
}

declare module '*.json' {
  const content: any;
  export = content;
}