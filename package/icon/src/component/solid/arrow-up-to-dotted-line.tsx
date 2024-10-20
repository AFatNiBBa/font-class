
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-to-dotted-line` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-dotted-line?s=solid arrow-up-to-dotted-line}
 * @preview ![arrow-up-to-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-up-to-dotted-line.svg)
 */
const ArrowUpToDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm96 0a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm64 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM320 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm64 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-9.4 233.4l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 269.3l0 66.7 0 112c0 17.7 14.3 32 32 32s32-14.3 32-32l0-112 0-66.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
    </Icon>
);

export default ArrowUpToDottedLine;