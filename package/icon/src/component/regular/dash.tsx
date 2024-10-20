
import { Icon } from "../../index";

/**
 * A component that renders the `dash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dash?s=regular dash}
 * @preview ![dash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/dash.svg)
 */
const Dash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256c0-13.3 10.7-24 24-24l464 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 280c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Dash;