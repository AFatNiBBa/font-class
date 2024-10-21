
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-up?s=sharp-thin square-chevron-up}
 * @preview ![square-chevron-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-chevron-up.svg)
 */
const SquareChevronUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM229.7 170.3l120 120 5.7 5.7L344 307.3l-5.7-5.7L224 187.3 109.7 301.7l-5.7 5.7L92.7 296l5.7-5.7 120-120 5.7-5.7 5.7 5.7z" />
    </Icon>
);

export default SquareChevronUp;