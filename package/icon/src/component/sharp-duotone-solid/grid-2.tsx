
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grid-2` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-2?s=sharp-duotone-solid grid-2}
 * @preview ![grid-2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/grid-2.svg)
 */
const Grid_2: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 288l0 192 192 0 0-192L32 288zM288 32l0 192 192 0 0-192L288 32z" />
        <path d="M224 32L32 32l0 192 192 0 0-192zM480 288l-192 0 0 192 192 0 0-192z" />
    </Icon>
);

export default Grid_2;