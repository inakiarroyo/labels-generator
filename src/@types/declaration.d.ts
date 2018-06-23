/* JSON files declaration */
declare module '*.json' {
  const value: {} | string | Array<{}>;
  export default value;
}

/* SCSS files declaration */
declare module '*.scss' {
  const content: {[className: string]: string};

  export = content;
}

declare module 'react-jss';
