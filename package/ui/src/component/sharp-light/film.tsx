
import { Icon } from "../../index";

/**
 * A component that renders the `film` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film?s=sharp-light film}
 * @preview ![film](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/film.svg)
 */
const Film: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 448l0-96 0-80 256 0 0 80 0 96-256 0zM384 240l-256 0 0-80 0-96 256 0 0 96 0 80zM96 448l-64 0 0-80 64 0 0 80zM32 336l0-64 64 0 0 64-64 0zM96 176l0 64-64 0 0-64 64 0zM96 64l0 80-64 0 0-80 64 0zM416 336l0-64 64 0 0 64-64 0zm0 112l0-80 64 0 0 80-64 0zm0-272l64 0 0 64-64 0 0-64zm64-32l-64 0 0-80 64 0 0 80zM512 32l-32 0L32 32 0 32 0 64 0 448l0 32 32 0 448 0 32 0 0-32 0-384 0-32z" />
    </Icon>
);

export default Film;