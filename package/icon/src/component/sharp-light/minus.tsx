
import { Icon } from "../../index";

/**
 * A component that renders the `minus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/minus?s=sharp-light minus}
 * @preview ![minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/minus.svg)
 */
const Minus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 272l-16 0L32 272l-16 0 0-32 16 0 384 0 16 0 0 32z" />
    </Icon>
);

export default Minus;