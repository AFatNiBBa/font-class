
import { Icon } from "../../index";

/**
 * A component that renders the `border-bottom-right` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-bottom-right?s=solid border-bottom-right}
 * @preview ![border-bottom-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/border-bottom-right.svg)
 */
const BorderBottomRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 336c0 8.8-7.2 16-16 16L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l336 0c44.2 0 80-35.8 80-80l0-336zM288 64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM96 64a32 32 0 1 0 64 0A32 32 0 1 0 96 64zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM0 64a32 32 0 1 0 64 0A32 32 0 1 0 0 64zM32 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 128a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default BorderBottomRight;