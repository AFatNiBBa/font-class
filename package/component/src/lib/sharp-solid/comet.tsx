
import { Icon } from "../../index";

/**
 * A component that renders the `comet` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comet?s=sharp-solid comet}
 * @preview ![comet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/comet.svg)
 */
const Comet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 0L299.4 75.9 304 16 101.3 133.4C38.6 169.7 0 236.6 0 309C0 421.1 90.9 512 203 512c72.4 0 139.4-38.6 175.7-101.3L496 208l-59.9 4.6L512 0zM231.6 275.8L320 288.5 256 350l15.1 86.8-79.1-41-79.1 41L128 350 64 288.5l88.4-12.7 39.6-79 39.6 79z" />
    </Icon>
);

export default Comet;