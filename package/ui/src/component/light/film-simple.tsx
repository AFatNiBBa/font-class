
import { Icon } from "../../index";

/**
 * A component that renders the `film-simple` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film-simple?s=light film-simple}
 * @preview ![film-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/film-simple.svg)
 */
const FilmSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 352l0 96 256 0 0-96 0-96 0-96 0-96L128 64l0 96 0 96 0 96zM96 368l-64 0 0 48c0 17.7 14.3 32 32 32l32 0 0-80zm0-32l0-64-64 0 0 64 64 0zm0-96l0-64-64 0 0 64 64 0zm0-96l0-80L64 64C46.3 64 32 78.3 32 96l0 48 64 0zM416 272l0 64 64 0 0-64-64 0zm0 96l0 80 32 0c17.7 0 32-14.3 32-32l0-48-64 0zm0-128l64 0 0-64-64 0 0 64zm0-96l64 0 0-48c0-17.7-14.3-32-32-32l-32 0 0 80zM64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z" />
    </Icon>
);

export default FilmSimple;