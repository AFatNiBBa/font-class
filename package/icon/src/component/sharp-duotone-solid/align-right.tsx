
import { Icon, generic } from "../../index";

/**
 * A component that renders the `align-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-right?s=sharp-duotone-solid align-right}
 * @preview ![align-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/align-right.svg)
 */
const AlignRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M160 32l0 64 288 0 0-64L160 32zm0 256l0 64 288 0 0-64-288 0z" />
        <path d="M448 480L0 480l0-64 448 0 0 64zm0-256L0 224l0-64 448 0 0 64z" />
    </Icon>
);

export default AlignRight;