
import { Icon } from "../../index";

/**
 * A component that renders the `cheese` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=sharp-solid cheese}
 * @preview ![cheese](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cheese.svg)
 */
const Cheese: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256L288 32c123.7 0 224 100.3 224 224L0 256zm512 32l0 192L0 480 0 288l512 0z" />
    </Icon>
);

export default Cheese;