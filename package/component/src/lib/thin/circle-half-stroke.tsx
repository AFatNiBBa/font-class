
import { Icon } from "../../index";

/**
 * A component that renders the `circle-half-stroke` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half-stroke?s=thin circle-half-stroke}
 * @preview ![circle-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-half-stroke.svg)
 */
const CircleHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 495.9c128.8-4.2 232-110 232-239.9S392.8 20.4 264 16.1l0 479.7zm-16 0l0-479.7C119.2 20.4 16 126.1 16 256s103.2 235.6 232 239.9zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default CircleHalfStroke;