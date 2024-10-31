
import { Icon } from "../../index";

/**
 * A component that renders the `dash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dash?s=sharp-solid dash}
 * @preview ![dash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dash.svg)
 */
const Dash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 224l32 0 448 0 32 0 0 64-32 0L32 288 0 288l0-64z" />
    </Icon>
);

export default Dash;