
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-exclamation?s=sharp-solid diamond-exclamation}
 * @preview ![diamond-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/diamond-exclamation.svg)
 */
const DiamondExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0L0 256 256 512 512 256 256 0zm24 128l0 24 0 112 0 24-48 0 0-24 0-112 0-24 48 0zM232 368l0-48 48 0 0 48-48 0z" />
    </Icon>
);

export default DiamondExclamation;