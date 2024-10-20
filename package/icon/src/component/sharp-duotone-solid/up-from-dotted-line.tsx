
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-from-dotted-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-from-dotted-line?s=sharp-duotone-solid up-from-dotted-line}
 * @preview ![up-from-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/up-from-dotted-line.svg)
 */
const UpFromDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 416l64 0 0 64L0 480l0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64z" />
        <path d="M224 32L64 192l0 32 96 0 0 160 128 0 0-160 96 0 0-32L224 32z" />
    </Icon>
);

export default UpFromDottedLine;