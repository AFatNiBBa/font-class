
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass-play` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-play?s=sharp-duotone-solid magnifying-glass-play}
 * @preview ![magnifying-glass-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/magnifying-glass-play.svg)
 */
const MagnifyingGlassPlay: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416 0A208 208 0 1 0 0 208zm145.8-91.8L303.9 208 145.8 299.8l0-183.6z" />
        <path d="M303.9 208L145.8 299.8l0-183.6L303.9 208zM441.4 486.6L330.7 376C348 363.3 363.3 348 376 330.7L486.6 441.4 509.3 464 464 509.3l-22.6-22.6z" />
    </Icon>
);

export default MagnifyingGlassPlay;