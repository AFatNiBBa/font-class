
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilet-paper-xmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper-xmark?s=duotone toilet-paper-xmark}
 * @preview ![toilet-paper-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/toilet-paper-xmark.svg)
 */
const ToiletPaperXmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192C0 298 43 384 96 384l32 0 32 0 256 0c-52.4 0-94.9-83.9-96-188.1c0-1.3 0-2.6 0-3.9C320 86 363 0 416 0L96 0C43 0 0 86 0 192zm103-65c9.4-9.4 24.6-9.4 33.9 0l31 31 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9z" />
        <path d="M416 384c-52.4 0-94.9-83.8-96-188.1c0-1.3 0-2.6 0-3.9C320 86 363 0 416 0s96 86 96 192l0 272c0 26.5-21.5 48-48 48l-256 0c-26.5 0-48-21.5-48-48l0-80 256 0zm0-128c17.7 0 32-28.7 32-64s-14.3-64-32-64s-32 28.7-32 64s14.3 64 32 64z" />
    </Icon>
);

export default ToiletPaperXmark;