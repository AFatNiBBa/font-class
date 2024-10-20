
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-root` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-root?s=sharp-duotone-solid square-root}
 * @preview ![square-root](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-root.svg)
 */
const SquareRoot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M320 32l-24 0-6.7 23L198.1 367.6 123.6 239.9 114.4 224 96 224l-64 0L0 224l0 64 32 0 45.6 0L180.4 464.1l9.3 15.9 42.4 0 6.7-23L344 96l200 0 32 0 0-64-32 0L320 32z" />
    </Icon>
);

export default SquareRoot;