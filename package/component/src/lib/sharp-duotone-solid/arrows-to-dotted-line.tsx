
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-to-dotted-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-dotted-line?s=sharp-duotone-solid arrows-to-dotted-line}
 * @preview ![arrows-to-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-to-dotted-line.svg)
 */
const ArrowsToDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224l64 0 0 64L0 288l0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64z" />
        <path d="M256 0l0 32 0 32 64 0 0 32-96 96L128 96l0-32 64 0 0-32 0-32 64 0zm0 448l0 32 0 32-64 0 0-32 0-32-64 0 0-32 96-96 96 96 0 32-64 0z" />
    </Icon>
);

export default ArrowsToDottedLine;