
import { Icon } from "../../index";

/**
 * A component that renders the `period` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/period?s=sharp-solid period}
 * @preview ![period](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/period.svg)
 */
const Period: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M32 352H160V480H32V352z" />
    </Icon>
);

export default Period;