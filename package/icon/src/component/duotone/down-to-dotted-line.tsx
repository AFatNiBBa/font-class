
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-to-dotted-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-dotted-line?s=duotone down-to-dotted-line}
 * @preview ![down-to-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/down-to-dotted-line.svg)
 */
const DownToDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 448a32 32 0 1 0 64 0A32 32 0 1 0 0 448zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M251.3 372.7L374.1 249.9c6.4-6.4 9.9-15 9.9-24c0-18.7-15.2-33.9-33.9-33.9L288 192l0-128c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 128-62.1 0C79.2 192 64 207.2 64 225.9c0 9 3.6 17.6 9.9 24L196.7 372.7c7.2 7.2 17.1 11.3 27.3 11.3s20.1-4.1 27.3-11.3z" />
    </Icon>
);

export default DownToDottedLine;