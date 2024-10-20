
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-triangle-square` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-triangle-square?s=sharp-solid arrow-down-triangle-square}
 * @preview ![arrow-down-triangle-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-down-triangle-square.svg)
 */
const ArrowDownTriangleSquare: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 479.6l23.7-26 80-88 21.5-23.7-47.4-43-21.5 23.7L192 349.2 192 64l0-32-64 0 0 32 0 285.2-24.3-26.8L82.2 298.8l-47.4 43 21.5 23.7 80 88 23.7 26zM416 32L304 224l224 0L416 32zm96 448l0-192-192 0 0 192 192 0z" />
    </Icon>
);

export default ArrowDownTriangleSquare;