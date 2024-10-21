
import { Icon } from "../../index";

/**
 * A component that renders the `camera-movie` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-movie?s=light camera-movie}
 * @preview ![camera-movie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/camera-movie.svg)
 */
const CameraMovie: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 0c40.8 0 76.4 21.8 96 54.3C259.6 21.8 295.2 0 336 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-192 0C82.1 224 32 173.9 32 112S82.1 0 144 0zM64 112c0 44.2 35.8 80 80 80l192 0c44.2 0 80-35.8 80-80s-35.8-80-80-80c-39.6 0-72.5 28.8-78.9 66.6c-1.3 7.7-8 13.4-15.8 13.4l-2.7 0c-7.8 0-14.5-5.6-15.8-13.4C216.5 60.8 183.6 32 144 32c-44.2 0-80 35.8-80 80zm80-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm168 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM136 288l-8 0c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-216 0zm0-32l216 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64l0-128c0-11.7 3.1-22.6 8.6-32L16 288c-8.8 0-16-7.2-16-16s7.2-16 16-16l112 0 8 0zM448 440.9l85.4 38.4c1 .4 2 .7 3.1 .7c4.2 0 7.5-3.4 7.5-7.5l0-180.6c0-3.2-2.9-5.6-6-5.1c-.4 .1-.9 .2-1.3 .4L448 327.1l0-35.1 75.6-34c2.9-1.3 6-2.2 9.1-2.8c22.6-3.8 43.3 13.7 43.3 36.6l0 180.6c0 21.8-17.7 39.5-39.5 39.5c-5.6 0-11.1-1.2-16.2-3.5L448 476l0-35.1z" />
    </Icon>
);

export default CameraMovie;