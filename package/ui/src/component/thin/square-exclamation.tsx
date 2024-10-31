
import { Icon } from "../../index";

/**
 * A component that renders the `square-exclamation` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-exclamation?s=thin square-exclamation}
 * @preview ![square-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-exclamation.svg)
 */
const SquareExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 32c4.4 0 8 3.6 8 8l0 160c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-160c0-4.4 3.6-8 8-8zM208 352a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default SquareExclamation;