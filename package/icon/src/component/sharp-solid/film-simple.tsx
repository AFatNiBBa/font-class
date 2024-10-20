
import { Icon } from "../../index";

/**
 * A component that renders the `film-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film-simple?s=sharp-solid film-simple}
 * @preview ![film-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/film-simple.svg)
 */
const FilmSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 32L128 32l0 64L64 96l0-64L0 32 0 480l64 0 0-64 64 0 0 64 256 0 0-64 64 0 0 64 64 0 0-448-64 0 0 64-64 0 0-64zM64 160l64 0 0 64-64 0 0-64zm384 0l0 64-64 0 0-64 64 0zM64 288l64 0 0 64-64 0 0-64zm384 0l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default FilmSimple;