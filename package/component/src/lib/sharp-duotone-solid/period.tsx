
import { Icon, generic } from "../../index";

/**
 * A component that renders the `period` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/period?s=sharp-duotone-solid period}
 * @preview ![period](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/period.svg)
 */
const Period: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M32 352H160V480H32V352z" />
    </Icon>
);

export default Period;