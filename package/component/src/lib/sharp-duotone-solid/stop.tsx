
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stop` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stop?s=sharp-duotone-solid stop}
 * @preview ![stop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/stop.svg)
 */
const Stop: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64H384V448H0V64z" />
    </Icon>
);

export default Stop;