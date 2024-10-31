
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-full` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-full?s=sharp-duotone-solid square-full}
 * @preview ![square-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-full.svg)
 */
const SquareFull: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0H512V512H0V0z" />
    </Icon>
);

export default SquareFull;