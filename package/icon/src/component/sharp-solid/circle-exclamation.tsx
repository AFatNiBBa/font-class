
import { Icon } from "../../index";

/**
 * A component that renders the `circle-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation?s=sharp-solid circle-exclamation}
 * @preview ![circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-exclamation.svg)
 */
const CircleExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm24-384l0 24 0 112 0 24-48 0 0-24 0-112 0-24 48 0zM232 368l0-48 48 0 0 48-48 0z" />
    </Icon>
);

export default CircleExclamation;