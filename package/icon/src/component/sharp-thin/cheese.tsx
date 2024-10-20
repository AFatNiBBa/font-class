
import { Icon } from "../../index";

/**
 * A component that renders the `cheese` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=sharp-thin cheese}
 * @preview ![cheese](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cheese.svg)
 */
const Cheese: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 272l0 192 480 0 0-192L16 272zm10.1-16L496 256c0-113.1-90.2-205.1-202.6-207.9L26.1 256zM0 256L288 32c123.7 0 224 100.3 224 224l0 208 0 16-16 0L16 480 0 480l0-16L0 256z" />
    </Icon>
);

export default Cheese;