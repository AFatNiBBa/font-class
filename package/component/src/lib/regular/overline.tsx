
import { Icon } from "../../index";

/**
 * A component that renders the `overline` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/overline?s=regular overline}
 * @preview ![overline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/overline.svg)
 */
const Overline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 32C10.7 32 0 42.7 0 56S10.7 80 24 80l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 32zm200 80c-97.2 0-176 78.8-176 176l0 16c0 97.2 78.8 176 176 176s176-78.8 176-176l0-16c0-97.2-78.8-176-176-176zM96 288c0-70.7 57.3-128 128-128s128 57.3 128 128l0 16c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-16z" />
    </Icon>
);

export default Overline;