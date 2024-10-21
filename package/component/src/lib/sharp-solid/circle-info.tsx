
import { Icon } from "../../index";

/**
 * A component that renders the `circle-info` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-info?s=sharp-solid circle-info}
 * @preview ![circle-info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-info.svg)
 */
const CircleInfo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0-24 0 0-48 24 0 48 0 24 0 0 24 0 88 8 0 24 0 0 48-24 0-80 0-24 0 0-48 24 0zm72-144l-64 0 0-64 64 0 0 64z" />
    </Icon>
);

export default CircleInfo;