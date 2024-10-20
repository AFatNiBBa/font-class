
import { Icon } from "../../index";

/**
 * A component that renders the `grid-horizontal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-horizontal?s=sharp-solid grid-horizontal}
 * @preview ![grid-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/grid-horizontal.svg)
 */
const GridHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 128L0 128 0 256l128 0 0-128zm0 160L0 288 0 416l128 0 0-128zm32-160l0 128 128 0 0-128-128 0zM288 288l-128 0 0 128 128 0 0-128zm32-160l0 128 128 0 0-128-128 0zM448 288l-128 0 0 128 128 0 0-128z" />
    </Icon>
);

export default GridHorizontal;