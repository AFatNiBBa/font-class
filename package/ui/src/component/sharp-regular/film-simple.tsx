
import { Icon } from "../../index";

/**
 * A component that renders the `film-simple` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film-simple?s=sharp-regular film-simple}
 * @preview ![film-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/film-simple.svg)
 */
const FilmSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 432l192 0 0-112 0-128 0-112L160 80l0 112 0 128 0 112zM112 80L48 80l0 88 64 0 0-88zm0 136l-64 0 0 80 64 0 0-80zm0 128l-64 0 0 88 64 0 0-88zM400 80l0 88 64 0 0-88-64 0zm64 136l-64 0 0 80 64 0 0-80zm0 128l-64 0 0 88 64 0 0-88zm0-312l48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32l48 0 416 0z" />
    </Icon>
);

export default FilmSimple;