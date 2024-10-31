
import { Icon } from "../../index";

/**
 * A component that renders the `period` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/period?s=sharp-light period}
 * @preview ![period](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/period.svg)
 */
const Period: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M128 384l0 64-64 0 0-64 64 0zM64 352l-32 0 0 32 0 64 0 32 32 0 64 0 32 0 0-32 0-64 0-32-32 0-64 0z" />
    </Icon>
);

export default Period;