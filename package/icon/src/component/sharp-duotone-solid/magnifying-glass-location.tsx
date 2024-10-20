
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass-location` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-location?s=sharp-duotone-solid magnifying-glass-location}
 * @preview ![magnifying-glass-location](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/magnifying-glass-location.svg)
 */
const MagnifyingGlassLocation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416 0A208 208 0 1 0 0 208zm128-32c0-44.2 35.8-80 80-80s80 35.8 80 80c0 64-80 144-80 144s-80-80-80-144z" />
        <path d="M288 176c0 64-80 144-80 144s-80-80-80-144c0-44.2 35.8-80 80-80s80 35.8 80 80zm-48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM441.4 486.6L330.7 376C348 363.3 363.3 348 376 330.7L486.6 441.4 509.3 464 464 509.3l-22.6-22.6z" />
    </Icon>
);

export default MagnifyingGlassLocation;