
import { Icon } from "../../index";

/**
 * A component that renders the `circle-three-quarters-stroke` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters-stroke?s=regular circle-three-quarters-stroke}
 * @preview ![circle-three-quarters-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-three-quarters-stroke.svg)
 */
const CircleThreeQuartersStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48l0 176c0 17.7 14.3 32 32 32l176 0c0-114.9-93.1-208-208-208zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default CircleThreeQuartersStroke;