
import { Icon } from "../../index";

/**
 * A component that renders the `bars` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars?s=sharp-solid bars}
 * @preview ![bars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bars.svg)
 */
const Bars: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64l448 0 0 64L0 128 0 64zM0 224l448 0 0 64L0 288l0-64zM448 384l0 64L0 448l0-64 448 0z" />
    </Icon>
);

export default Bars;