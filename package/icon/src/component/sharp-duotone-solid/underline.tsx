
import { Icon, generic } from "../../index";

/**
 * A component that renders the `underline` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/underline?s=sharp-duotone-solid underline}
 * @preview ![underline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/underline.svg)
 */
const Underline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 32l0 64 32 0 16 0 0 128c0 88.4 71.6 160 160 160s160-71.6 160-160l0-128 16 0 32 0 0-64-32 0-96 0-32 0 0 64 32 0 16 0 0 128c0 53-43 96-96 96s-96-43-96-96l0-128 16 0 32 0 0-64-32 0L48 32 16 32z" />
        <path d="M0 416l32 0 384 0 32 0 0 64-32 0L32 480 0 480l0-64z" />
    </Icon>
);

export default Underline;