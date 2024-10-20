
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grid` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid?s=sharp-duotone-solid grid}
 * @preview ![grid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/grid.svg)
 */
const Grid: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 320l128 0 0-128L0 192zM160 32l0 128 128 0 0-128L160 32zm0 320l0 128 128 0 0-128-128 0zM320 192l0 128 128 0 0-128-128 0z" />
        <path d="M0 32l128 0 0 128L0 160 0 32zM0 352l128 0 0 128L0 480 0 352zM288 192l0 128-128 0 0-128 128 0zM320 32l128 0 0 128-128 0 0-128zM448 352l0 128-128 0 0-128 128 0z" />
    </Icon>
);

export default Grid;