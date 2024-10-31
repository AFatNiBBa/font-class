
import { Icon } from "../../index";

/**
 * A component that renders the `dash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dash?s=sharp-thin dash}
 * @preview ![dash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/dash.svg)
 */
const Dash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 248l8 0 496 0 8 0 0 16-8 0L8 264l-8 0 0-16z" />
    </Icon>
);

export default Dash;