
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-dotted-line` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-dotted-line?s=solid arrow-down-to-dotted-line}
 * @preview ![arrow-down-to-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-down-to-dotted-line.svg)
 */
const ArrowDownToDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M374.6 214.6l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 242.7l0-66.7 0-112c0-17.7 14.3-32 32-32s32 14.3 32 32l0 112 0 66.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zM32 480a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm96 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm96-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm128-32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
    </Icon>
);

export default ArrowDownToDottedLine;