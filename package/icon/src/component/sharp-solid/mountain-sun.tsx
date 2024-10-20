
import { Icon } from "../../index";

/**
 * A component that renders the `mountain-sun` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain-sun?s=sharp-solid mountain-sun}
 * @preview ![mountain-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mountain-sun.svg)
 */
const MountainSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M560 0a80 80 0 1 1 0 160A80 80 0 1 1 560 0zM0 448L256 64 412.9 299.4 480 192 640 448l0 64-128 0-192 0L0 512l0-64z" />
    </Icon>
);

export default MountainSun;