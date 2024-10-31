
import { Icon } from "../../index";

/**
 * A component that renders the `indent` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/indent?s=sharp-thin indent}
 * @preview ![indent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/indent.svg)
 */
const Indent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 56l8 0 432 0 8 0 0 16-8 0L8 72 0 72 0 56zM192 184l8 0 240 0 8 0 0 16-8 0-240 0-8 0 0-16zm8 128l240 0 8 0 0 16-8 0-240 0-8 0 0-16 8 0zM0 440l8 0 432 0 8 0 0 16-8 0L8 456l-8 0 0-16zM114.7 246L128 256l-13.3 10L16 340 0 352l0-20L0 180l0-20 16 12 98.7 74zM16 192l0 128 85.3-64L16 192z" />
    </Icon>
);

export default Indent;