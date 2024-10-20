
import { Icon } from "../../index";

/**
 * A component that renders the `square-full` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-full?s=light square-full}
 * @preview ![square-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-full.svg)
 */
const SquareFull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 32l0 448L32 480 32 32l448 0zM32 0L0 0 0 32 0 480l0 32 32 0 448 0 32 0 0-32 0-448 0-32L480 0 32 0z" />
    </Icon>
);

export default SquareFull;