
import { Icon } from "../../index";

/**
 * A component that renders the `circle-half-stroke` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half-stroke?s=solid circle-half-stroke}
 * @preview ![circle-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-half-stroke.svg)
 */
const CircleHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default CircleHalfStroke;