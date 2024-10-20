
import { Icon, generic } from "../../index";

/**
 * A component that renders the `border-center-h` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-center-h?s=sharp-duotone-solid border-center-h}
 * @preview ![border-center-h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/border-center-h.svg)
 */
const BorderCenterH: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l64 0 0 64L0 96 0 32zm0 96l64 0 0 64L0 192l0-64zM0 320l64 0 0 64L0 384l0-64zm0 96l64 0 0 64L0 480l0-64zM96 32l64 0 0 64L96 96l0-64zm0 384l64 0 0 64-64 0 0-64zM192 32l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 192l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zM288 32l64 0 0 64-64 0 0-64zm0 384l64 0 0 64-64 0 0-64zM384 32l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 192l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64z" />
        <path d="M0 224l32 0 384 0 32 0 0 64-32 0L32 288 0 288l0-64z" />
    </Icon>
);

export default BorderCenterH;