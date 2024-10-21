
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-down?s=sharp-thin square-chevron-down}
 * @preview ![square-chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-chevron-down.svg)
 */
const SquareChevronDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 464L16 48l416 0 0 416L16 464zM0 480l16 0 416 0 16 0 0-16 0-416 0-16-16 0L16 32 0 32 0 48 0 464l0 16zM229.7 341.7l120-120 5.7-5.7L344 204.7l-5.7 5.7L224 324.7 109.7 210.3l-5.7-5.7L92.7 216l5.7 5.7 120 120 5.7 5.7 5.7-5.7z" />
    </Icon>
);

export default SquareChevronDown;