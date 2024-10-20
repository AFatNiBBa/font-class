
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-root-variable` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-root-variable?s=sharp-duotone-solid square-root-variable}
 * @preview ![square-root-variable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-root-variable.svg)
 */
const SquareRootVariable: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 45.6 0L180.4 464.1l9.3 15.9 42.4 0 6.7-23L344 96l200 0 32 0 0-64-32 0L320 32l-24 0-6.7 23L198.1 367.6 123.6 239.9 114.4 224 96 224l-64 0L0 224z" />
        <path d="M505.4 249.4L528 226.7 573.3 272l-22.6 22.6L525.3 320l25.4 25.4L573.3 368 528 413.3l-22.6-22.6L480 365.3l-25.4 25.4L432 413.3 386.7 368l22.6-22.6L434.7 320l-25.4-25.4L386.7 272 432 226.7l22.6 22.6L480 274.7l25.4-25.4z" />
    </Icon>
);

export default SquareRootVariable;