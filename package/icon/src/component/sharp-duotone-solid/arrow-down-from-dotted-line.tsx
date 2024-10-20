
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-from-dotted-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-from-dotted-line?s=sharp-duotone-solid arrow-down-from-dotted-line}
 * @preview ![arrow-down-from-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-from-dotted-line.svg)
 */
const ArrowDownFromDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 34.7l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0z" />
        <path d="M224 480l22.6-22.6 128-128 22.6-22.6L352 261.5l-22.6 22.6L256 357.5l0-162.7 0-32-64 0 0 32 0 162.7-73.4-73.4L96 261.5 50.7 306.7l22.6 22.6 128 128L224 480z" />
    </Icon>
);

export default ArrowDownFromDottedLine;