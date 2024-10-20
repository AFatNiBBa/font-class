
import { Icon } from "../../index";

/**
 * A component that renders the `bars` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars?s=sharp-duotone-solid bars}
 * @preview ![bars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bars.svg)
 */
const Bars: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 64L0 64l0 64 448 0 0-64zm0 320L0 384l0 64 448 0 0-64z" />
    </Icon>
);

export default Bars;