
import { Icon } from "../../index";

/**
 * A component that renders the `film` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film?s=sharp-regular film}
 * @preview ![film](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/film.svg)
 */
const Film: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 432l-192 0 0-112 0-40 192 0 0 40 0 112zm0-200l-192 0 0-40 0-112 192 0 0 112 0 40zM48 80l64 0 0 88-64 0 0-88zm0 136l64 0 0 80-64 0 0-80zm64 216l-64 0 0-88 64 0 0 88zM400 168l0-88 64 0 0 88-64 0zm0 48l64 0 0 80-64 0 0-80zm0 128l64 0 0 88-64 0 0-88zM512 32l-48 0L48 32 0 32 0 80 0 432l0 48 48 0 416 0 48 0 0-48 0-352 0-48z" />
    </Icon>
);

export default Film;