
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-square-triangle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-square-triangle?s=sharp-duotone-solid arrow-down-square-triangle}
 * @preview ![arrow-down-square-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-square-triangle.svg)
 */
const ArrowDownSquareTriangle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M304 480L416 288 528 480l-224 0zM320 32l192 0 0 192-192 0 0-192z" />
        <path d="M160 480l23.7-26 80-88 21.5-23.7-47.4-43.1-21.5 23.7L192 349.7l0-285.2 0-32-64 0 0 32 0 285.2-24.3-26.8L82.2 299.2 34.8 342.3 56.3 366l80 88L160 480z" />
    </Icon>
);

export default ArrowDownSquareTriangle;