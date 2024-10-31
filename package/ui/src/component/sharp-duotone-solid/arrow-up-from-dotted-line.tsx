
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-from-dotted-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-dotted-line?s=sharp-duotone-solid arrow-up-from-dotted-line}
 * @preview ![arrow-up-from-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-from-dotted-line.svg)
 */
const ArrowUpFromDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 416l64 0 0 64L0 480l0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64z" />
        <path d="M224 34.7l22.6 22.6 128 128L397.3 208 352 253.3l-22.6-22.6L256 157.3 256 320l0 32-64 0 0-32 0-162.7-73.4 73.4L96 253.3 50.7 208l22.6-22.6 128-128L224 34.7z" />
    </Icon>
);

export default ArrowUpFromDottedLine;