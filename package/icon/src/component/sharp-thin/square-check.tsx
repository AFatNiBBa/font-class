
import { Icon } from "../../index";

/**
 * A component that renders the `square-check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-check?s=sharp-thin square-check}
 * @preview ![square-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-check.svg)
 */
const SquareCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM325.7 197.7l-128 128-5.7 5.7-5.7-5.7-64-64-5.7-5.7L128 244.7l5.7 5.7L192 308.7 314.3 186.3l5.7-5.7L331.3 192l-5.7 5.7z" />
    </Icon>
);

export default SquareCheck;