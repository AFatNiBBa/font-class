
import { Icon, generic } from "../../index";

/**
 * A component that renders the `align-center` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-center?s=sharp-duotone-solid align-center}
 * @preview ![align-center](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/align-center.svg)
 */
const AlignCenter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 64 256 0 0-64L96 32zm0 256l0 64 256 0 0-64L96 288z" />
        <path d="M448 480L0 480l0-64 448 0 0 64zm0-256L0 224l0-64 448 0 0 64z" />
    </Icon>
);

export default AlignCenter;