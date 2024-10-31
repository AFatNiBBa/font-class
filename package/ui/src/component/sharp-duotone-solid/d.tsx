
import { Icon, generic } from "../../index";

/**
 * A component that renders the `d` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/d?s=sharp-duotone-solid d}
 * @preview ![d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/d.svg)
 */
const D: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 128 0c123.7 0 224 100.3 224 224s-100.3 224-224 224L32 480 0 480l0-32L0 64 0 32zM64 96l0 320 96 0c88.4 0 160-71.6 160-160s-71.6-160-160-160L64 96z" />
    </Icon>
);

export default D;