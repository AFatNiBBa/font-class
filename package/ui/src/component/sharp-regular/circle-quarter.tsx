
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarter` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter?s=sharp-regular circle-quarter}
 * @preview ![circle-quarter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-quarter.svg)
 */
const CircleQuarter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M53.6 208C71.6 131.7 131.7 71.6 208 53.6L208 208 53.6 208zM4.5 208C1.5 223.5 0 239.6 0 256l48 0 160 0 48 0 0-48 0-160 0-48c-16.4 0-32.5 1.5-48 4.5C105.1 24 24 105.1 4.5 208z" />
    </Icon>
);

export default CircleQuarter;