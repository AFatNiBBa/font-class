
import { Icon } from "../../index";

/**
 * A component that renders the `circle-half-stroke` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half-stroke?s=sharp-light circle-half-stroke}
 * @preview ![circle-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-half-stroke.svg)
 */
const CircleHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 479.4l0-446.9C123.8 40.8 32 137.7 32 256s91.8 215.2 208 223.4zM480 256c0-118.3-91.8-215.2-208-223.4l0 446.9C388.2 471.2 480 374.3 480 256zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default CircleHalfStroke;