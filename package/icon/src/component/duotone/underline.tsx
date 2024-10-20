
import { Icon, generic } from "../../index";

/**
 * A component that renders the `underline` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/underline?s=duotone underline}
 * @preview ![underline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/underline.svg)
 */
const Underline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 64c0 17.7 14.3 32 32 32l16 0 0 128c0 88.4 71.6 160 160 160s160-71.6 160-160l0-128 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0 0 128c0 53-43 96-96 96s-96-43-96-96l0-128 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48 32C30.3 32 16 46.3 16 64z" />
        <path d="M0 448c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default Underline;