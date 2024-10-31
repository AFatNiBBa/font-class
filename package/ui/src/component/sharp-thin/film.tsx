
import { Icon } from "../../index";

/**
 * A component that renders the `film` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film?s=sharp-thin film}
 * @preview ![film](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/film.svg)
 */
const Film: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 120l0 80 96 0 0-80-96 0zm0-16l96 0 0-56L16 48l0 56zm0-72l96 0 8 0 8 0 256 0 8 0 8 0 96 0 16 0 0 16 0 56 0 8 0 8 0 80 0 8 0 8 0 80 0 8 0 8 0 80 0 8 0 8 0 56 0 16-16 0-96 0-8 0-8 0-256 0-8 0-8 0-96 0L0 480l0-16 0-56 0-8 0-8 0-80 0-8 0-8 0-80 0-8 0-8 0-80 0-8 0-8L0 48 0 32l16 0zm112 80l0 96 0 40 256 0 0-40 0-96 0-64L128 48l0 64zM112 256l0-40-96 0 0 80 96 0 0-40zm16 8l0 40 0 96 0 64 256 0 0-64 0-96 0-40-256 0zm272-8l0 40 96 0 0-80-96 0 0 40zm0-152l96 0 0-56-96 0 0 56zm0 16l0 80 96 0 0-80-96 0zm0 192l0 80 96 0 0-80-96 0zm0 96l0 56 96 0 0-56-96 0zm-288 0l-96 0 0 56 96 0 0-56zm0-16l0-80-96 0 0 80 96 0z" />
    </Icon>
);

export default Film;