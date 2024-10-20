
import { Icon } from "../../index";

/**
 * A component that renders the `square-v` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-v?s=sharp-thin square-v}
 * @preview ![square-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-v.svg)
 */
const SquareV: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM97.8 144l17.7 0L224 373.3 332.5 144l17.7 0-119 251.4-2.2 4.6-10.1 0-2.2-4.6L97.8 144z" />
    </Icon>
);

export default SquareV;