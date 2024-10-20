
import { Icon } from "../../index";

/**
 * A component that renders the `dash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dash?s=sharp-light dash}
 * @preview ![dash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/dash.svg)
 */
const Dash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 240l16 0 480 0 16 0 0 32-16 0L16 272 0 272l0-32z" />
    </Icon>
);

export default Dash;