
import { Icon } from "../../index";

/**
 * A component that renders the `image` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image?s=sharp-solid image}
 * @preview ![image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/image.svg)
 */
const Image: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l512 0 0 448L0 480 0 32zM323.5 202.1L304 174.7l-19.5 27.3L196.2 325.6l-26.3-29.6L152 275.9l-17.9 20.2-64 72L64 374.9l0 9.1 0 8 0 24 24 0 72 0 24 0 32 0 24 0 184 0 24 0 0-24 0-8 0-7.7-4.5-6.3-120-168zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default Image;