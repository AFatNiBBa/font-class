
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-exclamation` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-exclamation?s=sharp-regular diamond-exclamation}
 * @preview ![diamond-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/diamond-exclamation.svg)
 */
const DiamondExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M33.9 289.9L0 256l33.9-33.9L222.1 33.9 256 0l33.9 33.9L478.1 222.1 512 256l-33.9 33.9L289.9 478.1 256 512l-33.9-33.9L33.9 289.9zM67.9 256L256 444.1 444.1 256 256 67.9 67.9 256zM232 152l0-8 48 0 0 8 0 112 0 24-48 0 0-24 0-112zm48 216l-48 0 0-48 48 0 0 48z" />
    </Icon>
);

export default DiamondExclamation;