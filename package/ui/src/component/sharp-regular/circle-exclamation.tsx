
import { Icon } from "../../index";

/**
 * A component that renders the `circle-exclamation` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation?s=sharp-regular circle-exclamation}
 * @preview ![circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-exclamation.svg)
 */
const CircleExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm24-384l-48 0 0 24 0 112 0 24 48 0 0-24 0-112 0-24zM232 368l48 0 0-48-48 0 0 48z" />
    </Icon>
);

export default CircleExclamation;