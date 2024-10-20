
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilet-paper-under` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper-under?s=sharp-duotone-solid toilet-paper-under}
 * @preview ![toilet-paper-under](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/toilet-paper-under.svg)
 */
const ToiletPaperUnder: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192C0 298 43 384 96 384l32 0 32 0 256 0c-52.4 0-94.9-83.9-96-188.1c0-1.3 0-2.6 0-3.9C320 86 363 0 416 0L96 0C43 0 0 86 0 192zm80 16a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm64 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm64 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm64 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M320 195.9c1 104.2 43.6 188.1 96 188.1l-256 0 0 128 352 0 0-320C512 86 469 0 416 0s-96 86-96 192c0 1.3 0 2.6 0 3.9zM448 192c0 35.3-14.3 64-32 64s-32-28.7-32-64s14.3-64 32-64s32 28.7 32 64zM80 208a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm64 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default ToiletPaperUnder;