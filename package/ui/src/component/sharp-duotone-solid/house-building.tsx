
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-building` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-building?s=sharp-duotone-solid house-building}
 * @preview ![house-building](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/house-building.svg)
 */
const HouseBuilding: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M320 0L640 0l0 512-224 0 0-160 32 0 0-64-32 0 0-32 32 0 0-64-64 0 0 22.3L320 161 320 0zm64 96l0 64 64 0 0-64-64 0zm128 0l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0z" />
        <path d="M0 512L0 256 192 96 384 256l0 256L0 512zM240 368l0-96-96 0 0 96 96 0z" />
    </Icon>
);

export default HouseBuilding;