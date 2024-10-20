
import { Icon, generic } from "../../index";

/**
 * A component that renders the `align-justify` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-justify?s=sharp-duotone-solid align-justify}
 * @preview ![align-justify](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/align-justify.svg)
 */
const AlignJustify: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l448 0 0-64L0 32zM0 288l0 64 448 0 0-64L0 288z" />
        <path d="M448 480L0 480l0-64 448 0 0 64zm0-256L0 224l0-64 448 0 0 64z" />
    </Icon>
);

export default AlignJustify;