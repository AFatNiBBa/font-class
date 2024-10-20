
import { Icon, generic } from "../../index";

/**
 * A component that renders the `film-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film-simple?s=sharp-duotone-solid film-simple}
 * @preview ![film-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/film-simple.svg)
 */
const FilmSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 32l192 0 0 448-192 0 0-448z" />
        <path d="M160 32l-48 0 0 64L48 96l0-64L0 32 0 480l48 0 0-64 64 0 0 64 48 0 0-448zM352 480l48 0 0-64 64 0 0 64 48 0 0-448-48 0 0 64-64 0 0-64-48 0 0 448zM112 160l0 64-64 0 0-64 64 0zm288 0l64 0 0 64-64 0 0-64zM112 288l0 64-64 0 0-64 64 0zm288 0l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default FilmSimple;