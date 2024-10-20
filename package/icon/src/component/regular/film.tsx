
import { Icon } from "../../index";

/**
 * A component that renders the `film` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film?s=regular film}
 * @preview ![film](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/film.svg)
 */
const Film: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 432l-192 0 0-112 0-40 192 0 0 40 0 112zm0-200l-192 0 0-40 0-112 192 0 0 112 0 40zM64 80l48 0 0 88-64 0 0-72c0-8.8 7.2-16 16-16zM48 216l64 0 0 80-64 0 0-80zm64 216l-48 0c-8.8 0-16-7.2-16-16l0-72 64 0 0 88zM400 168l0-88 48 0c8.8 0 16 7.2 16 16l0 72-64 0zm0 48l64 0 0 80-64 0 0-80zm0 128l64 0 0 72c0 8.8-7.2 16-16 16l-48 0 0-88zM448 32L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64z" />
    </Icon>
);

export default Film;