
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hill-rockslide` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hill-rockslide?s=sharp-duotone-solid hill-rockslide}
 * @preview ![hill-rockslide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hill-rockslide.svg)
 */
const HillRockslide: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M128 64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM248 96l36 64 72 0 36-64L356 32l-72 0L248 96zM352 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm96 44l0 72 64 36 64-36 0-72-64-36-64 36z" />
        <path d="M480 512H0V32L480 512z" />
    </Icon>
);

export default HillRockslide;