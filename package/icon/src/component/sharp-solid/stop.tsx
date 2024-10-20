
import { Icon } from "../../index";

/**
 * A component that renders the `stop` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stop?s=sharp-solid stop}
 * @preview ![stop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/stop.svg)
 */
const Stop: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 64H384V448H0V64z" />
    </Icon>
);

export default Stop;