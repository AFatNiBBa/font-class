
import { Icon } from "../../index";

/**
 * A component that renders the `bars` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars?s=sharp-thin bars}
 * @preview ![bars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bars.svg)
 */
const Bars: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 80l448 0 0 16L0 96 0 80zM0 240l448 0 0 16L0 256l0-16zM448 400l0 16L0 416l0-16 448 0z" />
    </Icon>
);

export default Bars;