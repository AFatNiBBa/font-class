
import { Icon } from "../../index";

/**
 * A component that renders the `seal-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seal-exclamation?s=sharp-solid seal-exclamation}
 * @preview ![seal-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/seal-exclamation.svg)
 */
const SealExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0l75 75 106 0 0 106 75 75-75 75 0 106-106 0-75 75-75-75L75 437l0-106L0 256l75-75L75 75l106 0L256 0zm24 128l-48 0 0 24 0 112 0 24 48 0 0-24 0-112 0-24zM232 320l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default SealExclamation;