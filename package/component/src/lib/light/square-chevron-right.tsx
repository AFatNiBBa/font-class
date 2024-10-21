
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-right?s=light square-chevron-right}
 * @preview ![square-chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-chevron-right.svg)
 */
const SquareChevronRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 96c0-17.7-14.3-32-32-32L64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320zM384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM315.3 267.3l-112 112c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L281.4 256 180.7 155.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l112 112c6.2 6.2 6.2 16.4 0 22.6z" />
    </Icon>
);

export default SquareChevronRight;