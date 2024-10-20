
import { Icon } from "../../index";

/**
 * A component that renders the `minus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/minus?s=sharp-solid minus}
 * @preview ![minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/minus.svg)
 */
const Minus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 288l-32 0L48 288l-32 0 0-64 32 0 352 0 32 0 0 64z" />
    </Icon>
);

export default Minus;