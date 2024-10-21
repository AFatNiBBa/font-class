
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-square-triangle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-square-triangle?s=sharp-solid arrow-down-square-triangle}
 * @preview ![arrow-down-square-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-down-square-triangle.svg)
 */
const ArrowDownSquareTriangle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 479.6l23.7-26 80-88 21.5-23.7-47.4-43-21.5 23.7L192 349.2 192 64l0-32-64 0 0 32 0 285.2-24.3-26.8L82.2 298.8l-47.4 43 21.5 23.7 80 88 23.7 26zM416 288L304 480l224 0L416 288zM512 32L320 32l0 192 192 0 0-192z" />
    </Icon>
);

export default ArrowDownSquareTriangle;