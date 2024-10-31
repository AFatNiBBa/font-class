
import { Icon, generic } from "../../index";

/**
 * A component that renders the `headphones-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones-simple?s=sharp-duotone-solid headphones-simple}
 * @preview ![headphones-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/headphones-simple.svg)
 */
const HeadphonesSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 392l0 24 48 0 0-24 0-104C48 173.1 141.1 80 256 80s208 93.1 208 208l0 104 0 24 48 0 0-24 0-104C512 146.6 397.4 32 256 32S0 146.6 0 288z" />
        <path d="M192 288L80 288l0 192 112 0 0-192zm128 0l0 192 112 0 0-192-112 0z" />
    </Icon>
);

export default HeadphonesSimple;