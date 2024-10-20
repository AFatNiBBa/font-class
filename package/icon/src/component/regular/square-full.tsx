
import { Icon } from "../../index";

/**
 * A component that renders the `square-full` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-full?s=regular square-full}
 * @preview ![square-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-full.svg)
 */
const SquareFull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 48l0 416L48 464 48 48l416 0zM48 0L0 0 0 48 0 464l0 48 48 0 416 0 48 0 0-48 0-416 0-48L464 0 48 0z" />
    </Icon>
);

export default SquareFull;