
import { Icon } from "../../index";

/**
 * A component that renders the `overline` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/overline?s=sharp-regular overline}
 * @preview ![overline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/overline.svg)
 */
const Overline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 32L0 32 0 80l24 0 400 0 24 0 0-48-24 0L24 32zm200 80c-97.2 0-176 78.8-176 176l0 16c0 97.2 78.8 176 176 176s176-78.8 176-176l0-16c0-97.2-78.8-176-176-176zM96 288c0-70.7 57.3-128 128-128s128 57.3 128 128l0 16c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-16z" />
    </Icon>
);

export default Overline;