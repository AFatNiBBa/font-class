
import { Icon } from "../../index";

/**
 * A component that renders the `film` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film?s=thin film}
 * @preview ![film](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/film.svg)
 */
const Film: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 48l0 56-96 0 0-8c0-26.5 21.5-48 48-48l48 0zm0 152l-96 0 0-80 96 0 0 80zM0 208l0 8 0 80 0 8 0 8 0 80 0 8 0 8 0 8c0 35.3 28.7 64 64 64l48 0 8 0 8 0 256 0 8 0 8 0 48 0c35.3 0 64-28.7 64-64l0-8 0-8 0-8 0-80 0-8 0-8 0-80 0-8 0-8 0-80 0-8 0-8 0-8c0-35.3-28.7-64-64-64l-48 0-8 0-8 0L128 32l-8 0-8 0L64 32C28.7 32 0 60.7 0 96l0 8 0 8 0 8 0 80 0 8zm16 8l96 0 0 40 0 40-96 0 0-80zm112 48l256 0 0 40 0 96 0 64-256 0 0-64 0-96 0-40zm256-16l-256 0 0-40 0-96 0-64 256 0 0 64 0 96 0 40zm16 8l0-40 96 0 0 80-96 0 0-40zM16 392l0-80 96 0 0 80-96 0zm0 24l0-8 96 0 0 56-48 0c-26.5 0-48-21.5-48-48zM400 104l0-56 48 0c26.5 0 48 21.5 48 48l0 8-96 0zm0 96l0-80 96 0 0 80-96 0zm0 192l0-80 96 0 0 80-96 0zm0 72l0-56 96 0 0 8c0 26.5-21.5 48-48 48l-48 0z" />
    </Icon>
);

export default Film;