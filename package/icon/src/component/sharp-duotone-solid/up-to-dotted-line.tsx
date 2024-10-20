
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-to-dotted-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-dotted-line?s=sharp-duotone-solid up-to-dotted-line}
 * @preview ![up-to-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/up-to-dotted-line.svg)
 */
const UpToDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l64 0 0 64L0 96 0 32zm96 0l64 0 0 64L96 96l0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64z" />
        <path d="M224 128L64 288l0 32 96 0 0 160 128 0 0-160 96 0 0-32L224 128z" />
    </Icon>
);

export default UpToDottedLine;