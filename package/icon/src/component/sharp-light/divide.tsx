
import { Icon } from "../../index";

/**
 * A component that renders the `divide` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/divide?s=sharp-light divide}
 * @preview ![divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/divide.svg)
 */
const Divide: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M192 96l0 64 64 0 0-64-64 0zM160 64l32 0 64 0 32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32zM432 272l-16 0L32 272l-16 0 0-32 16 0 384 0 16 0 0 32zM256 352l-64 0 0 64 64 0 0-64zm-64-32l64 0 32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32 32 0z" />
    </Icon>
);

export default Divide;