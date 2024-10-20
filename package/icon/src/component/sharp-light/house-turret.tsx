
import { Icon } from "../../index";

/**
 * A component that renders the `house-turret` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-turret?s=sharp-light house-turret}
 * @preview ![house-turret](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/house-turret.svg)
 */
const HouseTurret: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 0L16 0 336 0l16 0 0 16 0 118.3L320 161l0-129-64 0 0 64 0 16-32 0 0-16 0-64-96 0 0 64 0 16-32 0 0-16 0-64L32 32l0 177.9 60 67.5 4 4.5 0 6.1 0 208 0 16-32 0 0-16 0-201.9L4 226.6l-4-4.5L0 216 0 16 0 0zM320 202.7L352 176l96-80L640 256l0 224 0 32-32 0-320 0-32 0 0-32 0-224 64-53.3zM192 192c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32 32 0 0-32zm-64 0c0-26.5 21.5-48 48-48s48 21.5 48 48l0 32 0 32-32 0-32 0-32 0 0-32 0-32zm160 79l0 209 320 0 0-209L448 137.7 288 271zm128 17l0 64 64 0 0-64-64 0zm0-32l64 0 32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32 32 0z" />
    </Icon>
);

export default HouseTurret;