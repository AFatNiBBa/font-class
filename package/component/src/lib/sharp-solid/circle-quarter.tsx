
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarter` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter?s=sharp-solid circle-quarter}
 * @preview ![circle-quarter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-quarter.svg)
 */
const CircleQuarter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256C0 114.6 114.6 0 256 0l0 256L0 256z" />
    </Icon>
);

export default CircleQuarter;