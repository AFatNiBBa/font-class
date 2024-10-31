
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-movie` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-movie?s=sharp-duotone-solid camera-movie}
 * @preview ![camera-movie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/camera-movie.svg)
 */
const CameraMovie: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256l0 64 32 0 32 0 0 192 384 0 0-64 0-128 0-64-96 0-192 0-32 0-64 0-32 0L0 256z" />
        <path d="M128 64a64 64 0 1 0 0 128 64 64 0 1 0 0-128zM352 256l-224 0C57.3 256 0 198.7 0 128S57.3 0 128 0c48.2 0 90.2 26.6 112 66C261.8 26.6 303.8 0 352 0c70.7 0 128 57.3 128 128s-57.3 128-128 128zm0-192a64 64 0 1 0 0 128 64 64 0 1 0 0-128zM576 256l0 256L448 448l0-128 128-64z" />
    </Icon>
);

export default CameraMovie;