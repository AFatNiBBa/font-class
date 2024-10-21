
import { Icon } from "../../index";

/**
 * A component that renders the `bars` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars?s=sharp-light bars}
 * @preview ![bars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bars.svg)
 */
const Bars: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64l448 0 0 32L0 96 0 64zM0 224l448 0 0 32L0 256l0-32zM448 384l0 32L0 416l0-32 448 0z" />
    </Icon>
);

export default Bars;