
import { Icon } from "../../index";

/**
 * A component that renders the `cabin` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cabin?s=sharp-solid cabin}
 * @preview ![cabin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cabin.svg)
 */
const Cabin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 176l0 48 384 0 96 0 32 0 0-48-32-22 0-122-96 0 0 56L256 0 0 176zm192 80L32 256l0 64 160 0 0-64zM32 352l0 64 160 0 0-64L32 352zm0 96l0 64 160 0 0-64L32 448zM320 256l0 64 160 0 0-64-160 0zM480 448l-160 0 0 64 160 0 0-64zM320 352l0 64 160 0 0-64-160 0zM256 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Cabin;