
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-exclamation` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-exclamation?s=sharp-light octagon-exclamation}
 * @preview ![octagon-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/octagon-exclamation.svg)
 */
const OctagonExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 338.7l0-165.5L173.3 32l165.5 0L480 173.3l0 165.5L338.7 480l-165.5 0L32 338.7zM160 0L0 160 0 352 160 512l192 0L512 352l0-192L352 0 160 0zM272 128l-32 0 0 16 0 128 0 16 32 0 0-16 0-128 0-16zM232 320l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default OctagonExclamation;