
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarter` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter?s=solid circle-quarter}
 * @preview ![circle-quarter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-quarter.svg)
 */
const CircleQuarter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256C14.3 256-.2 241.6 2 224.1C16.4 108.2 108.2 16.4 224.1 2C241.6-.2 256 14.3 256 32l0 192c0 17.7-14.3 32-32 32L32 256z" />
    </Icon>
);

export default CircleQuarter;