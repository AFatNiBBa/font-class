
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-to-dotted-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-dotted-line?s=sharp-duotone-solid arrow-up-to-dotted-line}
 * @preview ![arrow-up-to-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-to-dotted-line.svg)
 */
const ArrowUpToDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l64 0 0 64L0 96 0 32zm96 0l64 0 0 64L96 96l0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64z" />
        <path d="M224 146.7l22.6 22.6 128 128L397.3 320 352 365.3l-22.6-22.6L256 269.3l0 66.7 0 112 0 32-64 0 0-32 0-112 0-66.7-73.4 73.4L96 365.3 50.7 320l22.6-22.6 128-128L224 146.7z" />
    </Icon>
);

export default ArrowUpToDottedLine;