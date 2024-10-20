
import { Icon } from "../../index";

/**
 * A component that renders the `r` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/r?s=sharp-solid r}
 * @preview ![r](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/r.svg)
 */
const R: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 32L0 32 0 64 0 288 0 448l0 32 64 0 0-32 0-128 93.2 0L246 480l73.2 0-4.2-7.5L225.5 311.3C280.7 291.1 320 238.1 320 176c0-79.5-64.5-144-144-144L32 32zM176 256L64 256 64 96l112 0c44.2 0 80 35.8 80 80s-35.8 80-80 80z" />
    </Icon>
);

export default R;