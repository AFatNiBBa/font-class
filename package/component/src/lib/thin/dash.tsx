
import { Icon } from "../../index";

/**
 * A component that renders the `dash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dash?s=thin dash}
 * @preview ![dash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/dash.svg)
 */
const Dash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256c0-4.4 3.6-8 8-8l496 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 264c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default Dash;