
import { Icon } from "../../index";

/**
 * A component that renders the `r` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/r?s=sharp-regular r}
 * @preview ![r](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/r.svg)
 */
const R: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M24 32L0 32 0 56 0 280 0 456l0 24 48 0 0-24 0-152 109.6 0L263.6 480l56 0L211.9 301.1C273.6 288.3 320 233.5 320 168c0-75.1-60.9-136-136-136L24 32zM176 256L48 256 48 80l136 0c48.6 0 88 39.4 88 88s-39.4 88-88 88l-8 0z" />
    </Icon>
);

export default R;