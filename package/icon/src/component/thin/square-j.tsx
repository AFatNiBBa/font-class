
import { Icon } from "../../index";

/**
 * A component that renders the `square-j` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-j?s=thin square-j}
 * @preview ![square-j](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-j.svg)
 */
const SquareJ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm304 40l0 160c0 48.6-39.4 88-88 88s-88-39.4-88-88l0-16c0-4.4 3.6-8 8-8s8 3.6 8 8l0 16c0 39.8 32.2 72 72 72s72-32.2 72-72l0-160c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default SquareJ;