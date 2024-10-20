
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-to-dotted-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-dotted-line?s=sharp-duotone-solid down-to-dotted-line}
 * @preview ![down-to-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/down-to-dotted-line.svg)
 */
const DownToDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 64 64 0 0-64L0 416zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0z" />
        <path d="M224 384L64 224l0-32 96 0 0-160 128 0 0 160 96 0 0 32L224 384z" />
    </Icon>
);

export default DownToDottedLine;