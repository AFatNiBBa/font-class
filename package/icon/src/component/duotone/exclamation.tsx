
import { Icon, generic } from "../../index";

/**
 * A component that renders the `exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=duotone exclamation}
 * @preview ![exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/exclamation.svg)
 */
const Exclamation: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path class={generic.secondary} d="M24 440a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
        <path d="M64 32c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32s-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Exclamation;