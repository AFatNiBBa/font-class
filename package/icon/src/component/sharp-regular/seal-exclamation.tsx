
import { Icon } from "../../index";

/**
 * A component that renders the `seal-exclamation` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seal-exclamation?s=sharp-regular seal-exclamation}
 * @preview ![seal-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/seal-exclamation.svg)
 */
const SealExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M289.9 33.9l41 41 58 0 48 0 0 48 0 58 41 41L512 256l-33.9 33.9-41 41 0 58 0 48-48 0-58 0-41 41L256 512l-33.9-33.9-41-41-58 0-48 0 0-48 0-58-41-41L0 256l33.9-33.9 41-41 0-58 0-48 48 0 58 0 41-41L256 0l33.9 33.9zm41 89l-19.9 0L297 108.9l-41-41-41 41L200.9 123 181 123l-58 0 0 58 0 19.9L108.9 215l-41 41 41 41L123 311.1l0 19.9 0 58 58 0 19.9 0L215 403.1l41 41 41-41L311.1 389l19.9 0 58 0 0-58 0-19.9L403.1 297l41-41-41-41L389 200.9l0-19.9 0-58-58 0zm-51 5l0 24 0 112 0 24-48 0 0-24 0-112 0-24 48 0zM232 320l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default SealExclamation;