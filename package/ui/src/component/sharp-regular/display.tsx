
import { Icon } from "../../index";

/**
 * A component that renders the `display` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display?s=sharp-regular display}
 * @preview ![display](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/display.svg)
 */
const Display: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 48l480 0 0 320L48 368 48 48zM0 416l48 0 163.7 0-8 48L152 464l-24 0 0 48 24 0 72 0 128 0 72 0 24 0 0-48-24 0-51.7 0-8-48L528 416l48 0 0-48 0-320 0-48L528 0 48 0 0 0 0 48 0 368l0 48zm315.7 0l8 48-71.3 0 8-48 55.3 0z" />
    </Icon>
);

export default Display;