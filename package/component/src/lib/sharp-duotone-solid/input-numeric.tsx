
import { Icon, generic } from "../../index";

/**
 * A component that renders the `input-numeric` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-numeric?s=sharp-duotone-solid input-numeric}
 * @preview ![input-numeric](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/input-numeric.svg)
 */
const InputNumeric: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 64L0 384l0 64 64 0 512 0 64 0 0-64 0-256 0-64-64 0L64 64 0 64zm64 64l512 0 0 256L64 384l0-256z" />
        <path d="M325.4 211.8c-7-8-19.4-7.9-26.3 .1l-16.9 19.7-36.4-31.2 16.9-19.7c25.9-30.3 72.7-30.5 98.9-.5l15.8 18.1-3.4 3c8 22.3 3.4 48-13.5 66.4L326.8 304l33.2 0 24 0 0 48-24 0-88 0-16 0 0-42 69.1-74.9c6-6.5 6.2-16.6 .3-23.3zM128 160l32 0 24 0 0 24 0 120 16 0 24 0 0 48-24 0-80 0-24 0 0-48 24 0 16 0 0-96-8 0-24 0 0-48 24 0z" />
    </Icon>
);

export default InputNumeric;