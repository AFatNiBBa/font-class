
import { Icon } from "../../index";

/**
 * A component that renders the `grid-2-plus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-2-plus?s=sharp-solid grid-2-plus}
 * @preview ![grid-2-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/grid-2-plus.svg)
 */
const Grid_2Plus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l0 192L32 224 32 32l192 0zm0 256l0 192L32 480l0-192 192 0zM288 32l192 0 0 192-192 0 0-192zM408 272l0 24 0 64 64 0 24 0 0 48-24 0-64 0 0 64 0 24-48 0 0-24 0-64-64 0-24 0 0-48 24 0 64 0 0-64 0-24 48 0z" />
    </Icon>
);

export default Grid_2Plus;