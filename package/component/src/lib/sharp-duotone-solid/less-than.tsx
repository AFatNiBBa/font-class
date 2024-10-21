
import { Icon, generic } from "../../index";

/**
 * A component that renders the `less-than` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than?s=sharp-duotone-solid less-than}
 * @preview ![less-than](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/less-than.svg)
 */
const LessThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M384 64.5l-5 2.2L19 226.8 0 235.2l0 41.6 19 8.4 360 160 5 2.2 0-70L110.8 256 384 134.6l0-70z" />
    </Icon>
);

export default LessThan;