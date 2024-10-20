
import { Icon, generic } from "../../index";

/**
 * A component that renders the `seal-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seal-exclamation?s=sharp-duotone-solid seal-exclamation}
 * @preview ![seal-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/seal-exclamation.svg)
 */
const SealExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256l75 75 0 106 106 0 75 75 75-75 106 0 0-106 75-75-75-75 0-106L331 75 256 0 181 75 75 75l0 106L0 256zM232 128c16 0 32 0 48 0c0 8 0 16 0 24c0 37.3 0 74.7 0 112c0 8 0 16 0 24c-16 0-32 0-48 0c0-8 0-16 0-24c0-37.3 0-74.7 0-112c0-8 0-16 0-24zm0 192l48 0c0 16 0 32 0 48l-48 0c0-16 0-32 0-48z" />
        <path d="M280 152l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zm0 168l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default SealExclamation;