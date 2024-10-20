
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-left?s=light square-chevron-left}
 * @preview ![square-chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-chevron-left.svg)
 */
const SquareChevronLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 416c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64C46.3 64 32 78.3 32 96l0 320zm32 64c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480zm68.7-235.3l112-112c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L166.6 256 267.3 356.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-112-112c-6.2-6.2-6.2-16.4 0-22.6z" />
    </Icon>
);

export default SquareChevronLeft;