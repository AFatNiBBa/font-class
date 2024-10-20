
import { Icon } from "../../index";

/**
 * A component that renders the `colon` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/colon?s=sharp-light colon}
 * @preview ![colon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/colon.svg)
 */
const Colon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M64 96l0 64 64 0 0-64L64 96zM32 64l32 0 64 0 32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32zM64 352l0 64 64 0 0-64-64 0zM32 320l32 0 64 0 32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32z" />
    </Icon>
);

export default Colon;