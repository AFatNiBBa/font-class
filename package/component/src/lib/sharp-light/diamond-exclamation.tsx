
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-exclamation` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-exclamation?s=sharp-light diamond-exclamation}
 * @preview ![diamond-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/diamond-exclamation.svg)
 */
const DiamondExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M22.6 278.6L0 256l22.6-22.6L233.4 22.6 256 0l22.6 22.6L489.4 233.4 512 256l-22.6 22.6L278.6 489.4 256 512l-22.6-22.6L22.6 278.6zM45.3 256L256 466.7 466.7 256 256 45.3 45.3 256zM272 128l0 16 0 128 0 16-32 0 0-16 0-128 0-16 32 0zM232 368l0-48 48 0 0 48-48 0z" />
    </Icon>
);

export default DiamondExclamation;