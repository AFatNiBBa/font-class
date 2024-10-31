
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-right?s=thin square-chevron-right}
 * @preview ![square-chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-chevron-right.svg)
 */
const SquareChevronRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 96c0-26.5-21.5-48-48-48L64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320zM384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM309.7 261.7l-120 120c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L292.7 256 178.3 141.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l120 120c3.1 3.1 3.1 8.2 0 11.3z" />
    </Icon>
);

export default SquareChevronRight;