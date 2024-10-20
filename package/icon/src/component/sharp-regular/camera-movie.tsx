
import { Icon } from "../../index";

/**
 * A component that renders the `camera-movie` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-movie?s=sharp-regular camera-movie}
 * @preview ![camera-movie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/camera-movie.svg)
 */
const CameraMovie: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 120A72 72 0 1 0 80 120a72 72 0 1 0 144 0zM344 240l-192 0C85.7 240 32 186.3 32 120S85.7 0 152 0c39.3 0 74.1 18.8 96 48c21.9-29.1 56.7-48 96-48c66.3 0 120 53.7 120 120s-53.7 120-120 120zM272 120a72 72 0 1 0 144 0 72 72 0 1 0 -144 0zM168 320l-24 0-32 0 0 144 256 0 0-144-200 0zm0-48l200 0 48 0 0 48 0 144 0 48-48 0-256 0-48 0 0-48 0-144-40 0L0 320l0-48 24 0 40 0 48 0 32 0 24 0zM448 467.7l0-50.8 80 27.7 0-121.2-80 27.7 0-50.8 80-27.7L576 256l0 50.8 0 154.4 0 50.8-48-16.6-80-27.7z" />
    </Icon>
);

export default CameraMovie;