
import { Icon } from "../../index";

/**
 * A component that renders the `circle-info` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-info?s=sharp-regular circle-info}
 * @preview ![circle-info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-info.svg)
 */
const CircleInfo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l-24 0 0 48 24 0 80 0 24 0 0-48-24 0-8 0 0-88 0-24-24 0-48 0-24 0 0 48 24 0 24 0 0 64-24 0zm72-144l0-64-64 0 0 64 64 0z" />
    </Icon>
);

export default CircleInfo;