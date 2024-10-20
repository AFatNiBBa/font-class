
import { Icon } from "../../index";

/**
 * A component that renders the `dash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dash?s=light dash}
 * @preview ![dash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/dash.svg)
 */
const Dash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256c0-8.8 7.2-16 16-16l480 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 272c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default Dash;