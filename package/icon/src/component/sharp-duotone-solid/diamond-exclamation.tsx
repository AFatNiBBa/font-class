
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diamond-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-exclamation?s=sharp-duotone-solid diamond-exclamation}
 * @preview ![diamond-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/diamond-exclamation.svg)
 */
const DiamondExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L256 512 512 256 256 0 0 256zM232 128l48 0 0 24 0 112 0 24-48 0 0-24 0-112 0-24zm0 192l48 0 0 48-48 0 0-48z" />
        <path d="M280 152l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zm0 168l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default DiamondExclamation;