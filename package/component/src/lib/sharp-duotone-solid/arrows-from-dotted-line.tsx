
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-from-dotted-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-from-dotted-line?s=sharp-duotone-solid arrows-from-dotted-line}
 * @preview ![arrows-from-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-from-dotted-line.svg)
 */
const ArrowsFromDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224l64 0 0 64L0 288l0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64z" />
        <path d="M128 96L224 0l96 96 0 32-64 0 0 32 0 32-64 0 0-32 0-32-64 0 0-32zM256 320l0 32 0 16 0 16 64 0 0 32-96 96-96-96 0-32 64 0 0-16 0-16 0-32 64 0z" />
    </Icon>
);

export default ArrowsFromDottedLine;