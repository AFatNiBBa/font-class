
import { Icon } from "../../index";

/**
 * A component that renders the `square-p` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-p?s=sharp-light square-p}
 * @preview ![square-p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-p.svg)
 */
const SquareP: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zm144 96l88 0c48.6 0 88 39.4 88 88l0 16-1.5 0c-7.5 41-43.4 72-86.5 72l-72 0 0 64 0 16-32 0 0-16 0-80 0-144 0-16 16 0zm88 144c30.9 0 56-25.1 56-56s-25.1-56-56-56l-72 0 0 112 72 0z" />
    </Icon>
);

export default SquareP;