
import { Icon } from "../../index";

/**
 * A component that renders the `photo-film` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/photo-film?s=light photo-film}
 * @preview ![photo-film](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/photo-film.svg)
 */
const PhotoFilm: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 32L256 32c-17.7 0-32 14.3-32 32l0 169.4L297.4 160c12.5-12.5 32.8-12.5 45.3 0L384 201.4 489.4 96c12.5-12.5 32.8-12.5 45.3 0L608 169.4 608 64c0-17.7-14.3-32-32-32zm64 176c0 0 0 0 0 .1l0 80c0 35.3-28.7 64-64 64l-304 0c0 0 0 0 0 0l-16 0c-35.3 0-64-28.7-64-64l0-16s0 0 0 0l0-208c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 144zm-32 6.7l-96-96L395.3 235.3 310.6 320 576 320c17.7 0 32-14.3 32-32l0-73.4zM265.4 320l96-96L320 182.6l-96 96 0 9.4c0 17.7 14.3 32 32 32l9.4 0zM296 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM128 160l32 0 0 32-32 0 0 80 0 128 0 80 256 0 0-96 32 0 0 96 32 0c17.7 0 32-14.3 32-32l0-64 32 0 0 64c0 35.3-28.7 64-64 64l-32 0-16 0-16 0-256 0-16 0-16 0-32 0c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64l32 0 16 0 16 0zM32 256l64 0 0-64-32 0c-17.7 0-32 14.3-32 32l0 32zm0 160l0 32c0 17.7 14.3 32 32 32l32 0 0-64-64 0zm64-32l0-96-64 0 0 96 64 0z" />
    </Icon>
);

export default PhotoFilm;