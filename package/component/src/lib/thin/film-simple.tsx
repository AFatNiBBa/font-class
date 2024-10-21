
import { Icon } from "../../index";

/**
 * A component that renders the `film-simple` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film-simple?s=thin film-simple}
 * @preview ![film-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/film-simple.svg)
 */
const FilmSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 104l0-56L64 48C37.5 48 16 69.5 16 96l0 8 96 0zM16 120l0 80 96 0 0-80-96 0zM0 216l0-8 0-8 0-80 0-8 0-8 0-8C0 60.7 28.7 32 64 32l48 0 8 0 8 0 256 0 8 0 8 0 48 0c35.3 0 64 28.7 64 64l0 8 0 8 0 8 0 80 0 8 0 8 0 80 0 8 0 8 0 80 0 8 0 8 0 8c0 35.3-28.7 64-64 64l-48 0-8 0-8 0-256 0-8 0-8 0-48 0c-35.3 0-64-28.7-64-64l0-8 0-8 0-8 0-80 0-8 0-8 0-80zm16 80l96 0 0-80-96 0 0 80zm0 16l0 80 96 0 0-80-96 0zm96 96l-96 0 0 8c0 26.5 21.5 48 48 48l48 0 0-56zm16 56l256 0 0-64 0-96 0-96 0-96 0-64L128 48l0 64 0 96 0 96 0 96 0 64zM400 48l0 56 96 0 0-8c0-26.5-21.5-48-48-48l-48 0zm96 72l-96 0 0 80 96 0 0-80zm0 96l-96 0 0 80 96 0 0-80zm0 96l-96 0 0 80 96 0 0-80zm0 96l-96 0 0 56 48 0c26.5 0 48-21.5 48-48l0-8z" />
    </Icon>
);

export default FilmSimple;