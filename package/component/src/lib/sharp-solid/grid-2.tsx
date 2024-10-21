
import { Icon } from "../../index";

/**
 * A component that renders the `grid-2` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-2?s=sharp-solid grid-2}
 * @preview ![grid-2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/grid-2.svg)
 */
const Grid_2: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32L32 32l0 192 192 0 0-192zm0 256L32 288l0 192 192 0 0-192zM288 32l0 192 192 0 0-192L288 32zM480 288l-192 0 0 192 192 0 0-192z" />
    </Icon>
);

export default Grid_2;