
import { Icon } from "../../index";

/**
 * A component that renders the `house-building` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-building?s=sharp-solid house-building}
 * @preview ![house-building](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/house-building.svg)
 */
const HouseBuilding: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 0L320 0l0 161 64 53.3 0-22.3 64 0 0 64-32 0 0 32 32 0 0 64-32 0 0 160 224 0L640 0zM512 192l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0zM448 96l0 64-64 0 0-64 64 0zm64 0l64 0 0 64-64 0 0-64zM0 256L0 512l384 0 0-256L192 96 0 256zm240 16l0 96-96 0 0-96 96 0z" />
    </Icon>
);

export default HouseBuilding;