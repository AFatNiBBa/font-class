
import { Icon } from "../../index";

/**
 * A component that renders the `circle-three-quarters-stroke` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters-stroke?s=solid circle-three-quarters-stroke}
 * @preview ![circle-three-quarters-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-three-quarters-stroke.svg)
 */
const CircleThreeQuartersStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 64l0 160c0 17.7 14.3 32 32 32l160 0c0-106-86-192-192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default CircleThreeQuartersStroke;