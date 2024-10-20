
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stapler` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stapler?s=sharp-duotone-solid stapler}
 * @preview ![stapler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/stapler.svg)
 */
const Stapler: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 219.4L64 352l384 0 0-64c-128-22.9-256-45.7-384-68.6z" />
        <path d="M640 304l0-64L256.6 48.3c-21.4-10.7-45-16.3-69-16.3C131.1 32 79.2 62.8 52.1 112.4L0 208l448 80 0 128L32 416l0 64 416 0 96 0 96 0 0-176z" />
    </Icon>
);

export default Stapler;