
import { Icon } from "../../index";

/**
 * A component that renders the `film-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film-slash?s=thin film-slash}
 * @preview ![film-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/film-slash.svg)
 */
const FilmSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7zM467.3 464l-3.3 0 0-2.6-16-12.6 0 15.2-256 0 0-64 0-96 0-57.3L176 234l0 62-96 0 0-80 73.1 0-20.3-16L80 200l0-41.7L64 145.6 64 200l0 8 0 8 0 80 0 8 0 8 0 80 0 8 0 8 0 8c0 35.3 28.7 64 64 64l48 0 8 0 8 0 256 0 8 0 8 0 23.5 0-20.3-16zM176 32l-23.5 0 20.3 16 3.3 0 0 2.6 16 12.6L192 48l256 0 0 64 0 96 0 57.3L464 278l0-62 96 0 0 80-73.1 0 20.3 16 52.9 0 0 41.7 16 12.6 0-54.4 0-8 0-8 0-80 0-8 0-8 0-80 0-8 0-8 0-8c0-35.3-28.7-64-64-64l-48 0-8 0-8 0L192 32l-8 0-8 0zM80 312l96 0 0 80-96 0 0-80zm0 96l96 0 0 56-48 0c-26.5 0-48-21.5-48-48l0-8zM464 48l48 0c26.5 0 48 21.5 48 48l0 8-96 0 0-56zm96 72l0 80-96 0 0-80 96 0z" />
    </Icon>
);

export default FilmSlash;