
import { Icon } from "../../index";

/**
 * A component that renders the `period` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/period?s=solid period}
 * @preview ![period](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/period.svg)
 */
const Period: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M32 416a64 64 0 1 1 128 0A64 64 0 1 1 32 416z" />
    </Icon>
);

export default Period;