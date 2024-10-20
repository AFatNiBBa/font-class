
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lamp` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp?s=sharp-duotone-solid lamp}
 * @preview ![lamp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lamp.svg)
 */
const Lamp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 432c0 48 32 80 32 80l192 0s32-32 32-80c0-61.5-64-128-64-128l0-48-128 0 0 48s-64 66.5-64 128z" />
        <path d="M0 256L96 0H352l96 256H0z" />
    </Icon>
);

export default Lamp;