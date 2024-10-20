
import { Icon, generic } from "../../index";

/**
 * A component that renders the `compass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass?s=sharp-duotone-solid compass}
 * @preview ![compass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/compass.svg)
 */
const Compass: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 384l64-192 192-64L320 320 128 384z" />
        <path d="M192 192L128 384l192-64 64-192L192 192zm64 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Compass;