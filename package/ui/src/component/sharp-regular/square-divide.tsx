
import { Icon } from "../../index";

/**
 * A component that renders the `square-divide` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-divide?s=sharp-regular square-divide}
 * @preview ![square-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-divide.svg)
 */
const SquareDivide: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zm256 96l0 64-64 0 0-64 64 0zM136 232l176 0 24 0 0 48-24 0-176 0-24 0 0-48 24 0zm56 88l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default SquareDivide;