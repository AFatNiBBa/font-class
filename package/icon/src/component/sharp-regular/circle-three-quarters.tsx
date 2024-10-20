
import { Icon } from "../../index";

/**
 * A component that renders the `circle-three-quarters` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters?s=sharp-regular circle-three-quarters}
 * @preview ![circle-three-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-three-quarters.svg)
 */
const CircleThreeQuarters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 304l0-48 0-202.4C116.3 75.2 48 157.6 48 256c0 114.9 93.1 208 208 208c98.4 0 180.8-68.3 202.4-160L256 304l-48 0zm299.5 0C485 422.4 381 512 256 512C114.6 512 0 397.4 0 256C0 131 89.6 27 208 4.5C223.5 1.5 239.6 0 256 0l0 48 0 160 0 48 48 0 160 0 48 0c0 16.4-1.5 32.5-4.5 48z" />
    </Icon>
);

export default CircleThreeQuarters;