
import { Icon, generic } from "../../index";

/**
 * A component that renders the `film-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film-slash?s=sharp-duotone-solid film-slash}
 * @preview ![film-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/film-slash.svg)
 */
const FilmSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 146.4L64 480l423.4 0-81.2-64L224 416l0-128 19.7 0L176 234.7l0 53.3-64 0 0-64 50.5 0L64 146.4zM70.5 32L224 151.1 224 96l192 0 0 128-98.1 0C403.9 290.8 490 357.6 576 424.4L576 32 70.5 32zM112 352l64 0 0 64-64 0 0-64zM464 96l64 0 0 64-64 0 0-64zm0 128l64 0 0 64-64 0 0-64z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default FilmSlash;