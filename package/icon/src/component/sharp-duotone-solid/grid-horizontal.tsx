
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grid-horizontal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-horizontal?s=sharp-duotone-solid grid-horizontal}
 * @preview ![grid-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/grid-horizontal.svg)
 */
const GridHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 288l128 0 0 128L0 416 0 288zM160 128l128 0 0 128-128 0 0-128zM320 288l128 0 0 128-128 0 0-128z" />
        <path d="M0 128l128 0 0 128L0 256 0 128zM160 288l128 0 0 128-128 0 0-128zM448 128l0 128-128 0 0-128 128 0z" />
    </Icon>
);

export default GridHorizontal;