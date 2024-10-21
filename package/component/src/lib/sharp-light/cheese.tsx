
import { Icon } from "../../index";

/**
 * A component that renders the `cheese` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=sharp-light cheese}
 * @preview ![cheese](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cheese.svg)
 */
const Cheese: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 448l448 0 0-160L32 288l0 160zM52.1 256L480 256c0-102.5-80.3-186.2-181.4-191.7L52.1 256zM0 256L288 32c123.7 0 224 100.3 224 224l0 192 0 32-32 0L32 480 0 480l0-32L0 256z" />
    </Icon>
);

export default Cheese;