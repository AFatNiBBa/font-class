
import { Icon } from "../../index";

/**
 * A component that renders the `period` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/period?s=sharp-thin period}
 * @preview ![period](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/period.svg)
 */
const Period: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M144 368l0 96-96 0 0-96 96 0zM48 352l-16 0 0 16 0 96 0 16 16 0 96 0 16 0 0-16 0-96 0-16-16 0-96 0z" />
    </Icon>
);

export default Period;