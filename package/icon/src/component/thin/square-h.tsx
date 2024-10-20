
import { Icon } from "../../index";

/**
 * A component that renders the `square-h` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-h?s=thin square-h}
 * @preview ![square-h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-h.svg)
 */
const SquareH: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm304 40c0-4.4 3.6-8 8-8s8 3.6 8 8l0 120 0 120c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-112-160 0 0 112c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-240c0-4.4 3.6-8 8-8s8 3.6 8 8l0 112 160 0 0-112z" />
    </Icon>
);

export default SquareH;