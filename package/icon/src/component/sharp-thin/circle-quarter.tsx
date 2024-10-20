
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarter` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter?s=sharp-thin circle-quarter}
 * @preview ![circle-quarter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-quarter.svg)
 */
const CircleQuarter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16.5 240L240 240l0-223.5C120.2 24.4 24.4 120.2 16.5 240zm-16 0C8.4 111.4 111.4 8.4 240 .5c5.3-.3 10.6-.5 16-.5l0 16 0 224 0 16-16 0L16 256 0 256c0-5.4 .2-10.7 .5-16z" />
    </Icon>
);

export default CircleQuarter;