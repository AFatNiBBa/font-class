
import { Icon } from "../../index";

/**
 * A component that renders the `dash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dash?s=sharp-regular dash}
 * @preview ![dash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dash.svg)
 */
const Dash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 232l24 0 464 0 24 0 0 48-24 0L24 280 0 280l0-48z" />
    </Icon>
);

export default Dash;