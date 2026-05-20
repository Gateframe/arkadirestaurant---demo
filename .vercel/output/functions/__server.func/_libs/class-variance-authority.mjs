import { c as clsx } from "./clsx.mjs";
const cx = clsx;
const cva = (base, config) => (props) => {
  return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};
export {
  cva as c
};
