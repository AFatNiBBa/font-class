
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-from-dotted-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-from-dotted-line?s=duotone up-from-dotted-line}
 * @preview ![up-from-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/up-from-dotted-line.svg)
 */
const UpFromDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 448a32 32 0 1 0 64 0A32 32 0 1 0 0 448zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M196.7 43.3L73.9 166.1c-6.4 6.4-9.9 15-9.9 24C64 208.8 79.2 224 97.9 224l62.1 0 0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 62.1 0c18.7 0 33.9-15.2 33.9-33.9c0-9-3.6-17.6-9.9-24L251.3 43.3C244.1 36.1 234.2 32 224 32s-20.1 4.1-27.3 11.3z" />
    </Icon>
);

export default UpFromDottedLine;