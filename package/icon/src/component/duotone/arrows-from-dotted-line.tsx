
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-from-dotted-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-from-dotted-line?s=duotone arrows-from-dotted-line}
 * @preview ![arrows-from-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-from-dotted-line.svg)
 */
const ArrowsFromDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 256A32 32 0 1 1 0 256a32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M201.4 9.4c12.5-12.5 32.8-12.5 45.3 0l64 64c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8l-32 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-32 0c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l64-64zM192 384l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-64 64c-12.5 12.5-32.8 12.5-45.3 0l-64-64c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l32 0z" />
    </Icon>
);

export default ArrowsFromDottedLine;