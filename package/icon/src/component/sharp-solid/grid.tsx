
import { Icon } from "../../index";

/**
 * A component that renders the `grid` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid?s=sharp-solid grid}
 * @preview ![grid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/grid.svg)
 */
const Grid: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l128 0 0 128L0 160 0 32zM0 192l128 0 0 128L0 320 0 192zM128 352l0 128L0 480 0 352l128 0zM160 32l128 0 0 128-128 0 0-128zM288 192l0 128-128 0 0-128 128 0zM160 352l128 0 0 128-128 0 0-128zM448 32l0 128-128 0 0-128 128 0zM320 192l128 0 0 128-128 0 0-128zM448 352l0 128-128 0 0-128 128 0z" />
    </Icon>
);

export default Grid;