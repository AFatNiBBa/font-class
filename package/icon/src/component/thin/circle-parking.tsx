
import { Icon } from "../../index";

/**
 * A component that renders the `circle-parking` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-parking?s=thin circle-parking}
 * @preview ![circle-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-parking.svg)
 */
const CircleParking: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM192 128l96 0c48.6 0 88 39.4 88 88s-39.4 88-88 88l-96 0 0 72c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-80 0-152c0-8.8 7.2-16 16-16zm96 160c39.8 0 72-32.2 72-72s-32.2-72-72-72l-96 0 0 144 96 0z" />
    </Icon>
);

export default CircleParking;