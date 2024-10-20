
import { Icon } from "../../index";

/**
 * A component that renders the `minus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/minus?s=sharp-regular minus}
 * @preview ![minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/minus.svg)
 */
const Minus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 280l-24 0L40 280l-24 0 0-48 24 0 368 0 24 0 0 48z" />
    </Icon>
);

export default Minus;