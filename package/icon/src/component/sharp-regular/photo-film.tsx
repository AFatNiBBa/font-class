
import { Icon } from "../../index";

/**
 * A component that renders the `photo-film` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/photo-film?s=sharp-regular photo-film}
 * @preview ![photo-film](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/photo-film.svg)
 */
const PhotoFilm: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M240 48l0 256 15.6 0 69.1-94.2L344 183.4l19.4 26.4L380 232.4l56-85.6L456 116.1l20.1 30.7L578.8 304l13.2 0 0-256L240 48zM192 0l48 0L592 0l48 0 0 48 0 256 0 48-48 0-352 0-48 0 0-48 0-256 0-48zM136 128l24 0 0 48 0 88 0 112 0 8 0 80 192 0 0-80 48 0 0 80 64 0 0-80 48 0 0 80 0 48-48 0-64 0-24 0-24 0-192 0-24 0-24 0-64 0L0 512l0-48L0 176l0-48 48 0 64 0 24 0zm-24 48l-64 0 0 64 64 0 0-64zM48 464l64 0 0-64-64 0 0 64zm0-112l64 0 0-64-64 0 0 64zM304 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default PhotoFilm;