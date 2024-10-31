
import { Icon } from "../../index";

/**
 * A component that renders the `cheese` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=sharp-regular cheese}
 * @preview ![cheese](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cheese.svg)
 */
const Cheese: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 304l0 128 416 0 0-128L48 304zm416-48c0-91.9-70.5-167.4-160.4-175.3L78.2 256 464 256zM0 256L288 32c123.7 0 224 100.3 224 224l0 176 0 48-48 0L48 480 0 480l0-48L0 256z" />
    </Icon>
);

export default Cheese;