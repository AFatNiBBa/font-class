
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-from-dotted-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-from-dotted-line?s=sharp-duotone-solid down-from-dotted-line}
 * @preview ![down-from-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/down-from-dotted-line.svg)
 */
const DownFromDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l64 0 0-64L0 32zm96 0l0 64 64 0 0-64L96 32zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0z" />
        <path d="M224 480L64 320l0-32 96 0 0-160 128 0 0 160 96 0 0 32L224 480z" />
    </Icon>
);

export default DownFromDottedLine;