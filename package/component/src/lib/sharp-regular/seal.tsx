
import { Icon } from "../../index";

/**
 * A component that renders the `seal` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seal?s=sharp-regular seal}
 * @preview ![seal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/seal.svg)
 */
const Seal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M331 75l-41-41L256 0 222.1 33.9 181 75l-58 0L75 75l0 48 0 58-41 41L0 256l33.9 33.9 41 41 0 58 0 48 48 0 58 0 41 41L256 512l33.9-33.9 41-41 58 0 48 0 0-48 0-58 41-41L512 256l-33.9-33.9-41-41 0-58 0-48-48 0-58 0zm58 48l0 58 0 19.9L403.1 215l41 41-41 41L389 311.1l0 19.9 0 58-58 0-19.9 0L297 403.1l-41 41-41-41L200.9 389 181 389l-58 0 0-58 0-19.9L108.9 297l-41-41 41-41L123 200.9l0-19.9 0-58 58 0 19.9 0L215 108.9l41-41 41 41L311.1 123l19.9 0 58 0z" />
    </Icon>
);

export default Seal;