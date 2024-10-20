
import { Icon } from "../../index";

/**
 * A component that renders the `square-small` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-small?s=sharp-regular square-small}
 * @preview ![square-small](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-small.svg)
 */
const SquareSmall: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M272 144l0 224L48 368l0-224 224 0zM48 96L0 96l0 48L0 368l0 48 48 0 224 0 48 0 0-48 0-224 0-48-48 0L48 96z" />
    </Icon>
);

export default SquareSmall;