
import { Icon } from "../../index";

/**
 * A component that renders the `minus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/minus?s=sharp-thin minus}
 * @preview ![minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/minus.svg)
 */
const Minus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M424 264l-8 0L32 264l-8 0 0-16 8 0 384 0 8 0 0 16z" />
    </Icon>
);

export default Minus;