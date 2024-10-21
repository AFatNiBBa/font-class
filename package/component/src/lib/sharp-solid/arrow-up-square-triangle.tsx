
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-square-triangle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-square-triangle?s=sharp-solid arrow-up-square-triangle}
 * @preview ![arrow-up-square-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-up-square-triangle.svg)
 */
const ArrowUpSquareTriangle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 32l0 192-192 0 0-192 192 0zm-352 .4l23.7 26 80 88 21.5 23.7-47.4 43.1-21.5-23.7L192 162.8 192 448l0 32-64 0 0-32 0-285.2-24.3 26.8L82.2 213.2 34.8 170.2l21.5-23.7 80-88 23.7-26zM416 288L528 480l-224 0L416 288z" />
    </Icon>
);

export default ArrowUpSquareTriangle;