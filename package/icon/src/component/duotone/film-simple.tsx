
import { Icon, generic } from "../../index";

/**
 * A component that renders the `film-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film-simple?s=duotone film-simple}
 * @preview ![film-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/film-simple.svg)
 */
const FilmSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 32l192 0 0 448-192 0 0-448z" />
        <path d="M160 32l-48 0 0 48c0 8.8-7.2 16-16 16L64 96c-8.8 0-16-7.2-16-16l0-46C20.4 41.1 0 66.2 0 96L0 416c0 29.8 20.4 54.9 48 62l0-46c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0 0-448zM352 480l48 0 0-48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 46c27.6-7.1 48-32.2 48-62l0-320c0-29.8-20.4-54.9-48-62l0 46c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0 0 448zM64 160l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm336 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM64 288l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm336 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32z" />
    </Icon>
);

export default FilmSimple;