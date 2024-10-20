
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass-location` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-location?s=duotone magnifying-glass-location}
 * @preview ![magnifying-glass-location](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/magnifying-glass-location.svg)
 */
const MagnifyingGlassLocation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416 0A208 208 0 1 0 0 208zm128-32c0-44.2 35.8-80 80-80s80 35.8 80 80c0 48.8-46.5 111.6-68.6 138.6c-6 7.3-16.8 7.3-22.7 0C174.5 287.6 128 224.8 128 176z" />
        <path d="M288 176c0 48.8-46.5 111.6-68.6 138.6c-6 7.3-16.8 7.3-22.7 0C174.5 287.6 128 224.8 128 176c0-44.2 35.8-80 80-80s80 35.8 80 80zm-48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm90.7 200C348 363.3 363.3 348 376 330.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376z" />
    </Icon>
);

export default MagnifyingGlassLocation;