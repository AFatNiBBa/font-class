
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-down` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-down?s=light square-chevron-down}
 * @preview ![square-chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-chevron-down.svg)
 */
const SquareChevronDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 448c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0zm64-32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM212.7 347.3l-112-112c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L224 313.4 324.7 212.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-112 112c-6.2 6.2-16.4 6.2-22.6 0z" />
    </Icon>
);

export default SquareChevronDown;