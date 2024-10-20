
import { Icon, generic } from "../../index";

/**
 * A component that renders the `film` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film?s=sharp-duotone-solid film}
 * @preview ![film](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/film.svg)
 */
const Film: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 96l0 128 192 0 0-128L160 96zm0 192l0 128 192 0 0-128-192 0z" />
        <path d="M0 32l512 0 0 448L0 480 0 32zM48 352l0 64 64 0 0-64-64 0zm416 0l-64 0 0 64 64 0 0-64zM48 224l0 64 64 0 0-64-64 0zm416 0l-64 0 0 64 64 0 0-64zM48 96l0 64 64 0 0-64L48 96zm416 0l-64 0 0 64 64 0 0-64zM160 96l0 128 192 0 0-128L160 96zM352 288l-192 0 0 128 192 0 0-128z" />
    </Icon>
);

export default Film;