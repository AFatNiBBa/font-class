
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass-music` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-music?s=sharp-duotone-solid magnifying-glass-music}
 * @preview ![magnifying-glass-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/magnifying-glass-music.svg)
 */
const MagnifyingGlassMusic: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416 0A208 208 0 1 0 0 208zm112 64c0-26.5 28.7-48 64-48c5.5 0 10.9 .5 16 1.5l0-57.5 0-32 0-17.3 16.4-5.5 48-16L288 86.7l0 33.3 0 32 0 17.3-16.4 5.5L240 185.3l0 86.7c0 26.5-28.7 48-64 48s-64-21.5-64-48z" />
        <path d="M288 86.7l0 33.3 0 32 0 17.3-16.4 5.5L240 185.3l0 86.7c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48c5.5 0 10.9 .5 16 1.5l0-57.5 0-32 0-17.3 16.4-5.5 48-16L288 86.7zM441.4 486.6L330.7 376C348 363.3 363.3 348 376 330.7L486.6 441.4 509.3 464 464 509.3l-22.6-22.6z" />
    </Icon>
);

export default MagnifyingGlassMusic;