
import { Icon } from "../../index";

/**
 * A component that renders the `empty-set` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/empty-set?s=sharp-solid empty-set}
 * @preview ![empty-set](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/empty-set.svg)
 */
const EmptySet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M435.4 121.9l67.2-67.2L457.4 9.4 390.1 76.6C352.8 48.6 306.3 32 256 32C132.3 32 32 132.3 32 256c0 50.3 16.6 96.8 44.6 134.2L9.4 457.4l45.3 45.3 67.2-67.2c37.4 28 83.8 44.6 134.1 44.6c123.7 0 224-100.3 224-224c0-50.3-16.6-96.8-44.6-134.1zm-91.2 .7L122.5 344.2C105.8 318.9 96 288.6 96 256c0-88.4 71.6-160 160-160c32.6 0 62.9 9.8 88.2 26.5zm-176.5 267L389.5 167.8C406.2 193.1 416 223.4 416 256c0 88.4-71.6 160-160 160c-32.6 0-62.9-9.8-88.2-26.5z" />
    </Icon>
);

export default EmptySet;