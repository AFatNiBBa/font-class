
import { Icon } from "../../index";

/**
 * A component that renders the `film-simple` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film-simple?s=regular film-simple}
 * @preview ![film-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/film-simple.svg)
 */
const FilmSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 432l192 0 0-112 0-128 0-112L160 80l0 112 0 128 0 112zM112 80L64 80c-8.8 0-16 7.2-16 16l0 72 64 0 0-88zm0 136l-64 0 0 80 64 0 0-80zm0 128l-64 0 0 72c0 8.8 7.2 16 16 16l48 0 0-88zM400 80l0 88 64 0 0-72c0-8.8-7.2-16-16-16l-48 0zm64 136l-64 0 0 80 64 0 0-80zm0 128l-64 0 0 88 48 0c8.8 0 16-7.2 16-16l0-72zM64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z" />
    </Icon>
);

export default FilmSimple;