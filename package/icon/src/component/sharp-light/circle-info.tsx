
import { Icon } from "../../index";

/**
 * A component that renders the `circle-info` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-info?s=sharp-light circle-info}
 * @preview ![circle-info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-info.svg)
 */
const CircleInfo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 352l0 32 16 0 96 0 16 0 0-32-16 0-32 0 0-112 0-16-16 0-40 0-16 0 0 32 16 0 24 0 0 96-32 0-16 0zm88-168l0-48-48 0 0 48 48 0z" />
    </Icon>
);

export default CircleInfo;