
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-to-dotted-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-dotted-line?s=sharp-duotone-solid arrow-down-to-dotted-line}
 * @preview ![arrow-down-to-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-to-dotted-line.svg)
 */
const ArrowDownToDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 64 64 0 0-64L0 416zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0z" />
        <path d="M224 365.3l22.6-22.6 128-128L397.3 192 352 146.7l-22.6 22.6L256 242.7l0-66.7 0-112 0-32-64 0 0 32 0 112 0 66.7-73.4-73.4L96 146.7 50.7 192l22.6 22.6 128 128L224 365.3z" />
    </Icon>
);

export default ArrowDownToDottedLine;