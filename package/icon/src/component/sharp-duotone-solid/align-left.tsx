
import { Icon, generic } from "../../index";

/**
 * A component that renders the `align-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-left?s=sharp-duotone-solid align-left}
 * @preview ![align-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/align-left.svg)
 */
const AlignLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l288 0 0-64L0 32zM0 288l0 64 288 0 0-64L0 288z" />
        <path d="M0 480l448 0 0-64L0 416l0 64zM0 224l448 0 0-64L0 160l0 64z" />
    </Icon>
);

export default AlignLeft;