
import { Icon } from "../../index";

/**
 * A component that renders the `golf-flag-hole` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/golf-flag-hole?s=sharp-solid golf-flag-hole}
 * @preview ![golf-flag-hole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/golf-flag-hole.svg)
 */
const GolfFlagHole: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0L416 128 175.5 234.9c.4 1.6 .5 3.3 .5 5.1l0 84.8c25.2-3.1 52.1-4.8 80-4.8c141.4 0 256 43 256 96s-114.6 96-256 96S0 469 0 416c0-35.5 51.5-66.6 128-83.2l0-76.8 0-16L128 0zm96 448c35.3 0 64-14.3 64-32s-28.7-32-64-32s-64 14.3-64 32s28.7 32 64 32z" />
    </Icon>
);

export default GolfFlagHole;