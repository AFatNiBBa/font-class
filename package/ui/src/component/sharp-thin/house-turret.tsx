
import { Icon } from "../../index";

/**
 * A component that renders the `house-turret` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-turret?s=sharp-thin house-turret}
 * @preview ![house-turret](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/house-turret.svg)
 */
const HouseTurret: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M8 0L0 0 0 8 0 216l0 3 2 2.3L64 291l0 205 0 8 16 0 0-8 0-208 0-3-2-2.3L16 213 16 16l80 0 0 72 0 8 16 0 0-8 0-72 128 0 0 72 0 8 16 0 0-8 0-72 80 0 0 131.7 16-13.3L352 8l0-8-8 0L8 0zM208 176l0 48-64 0 0-48c0-17.7 14.3-32 32-32s32 14.3 32 32zm-80 0l0 48 0 16 16 0 64 0 16 0 0-16 0-48c0-26.5-21.5-48-48-48s-48 21.5-48 48zm144 87.5L448 116.8 624 263.5 624 496l-352 0 0-232.5zM256 256l0 240 0 16 16 0 352 0 16 0 0-16 0-240L448 96 256 256zm152 24l80 0 0 80-80 0 0-80zm0-16l-16 0 0 16 0 80 0 16 16 0 80 0 16 0 0-16 0-80 0-16-16 0-80 0z" />
    </Icon>
);

export default HouseTurret;