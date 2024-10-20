
import { Icon } from "../../index";

/**
 * A component that renders the `minus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/minus?s=thin minus}
 * @preview ![minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/minus.svg)
 */
const Minus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M424 256c0 4.4-3.6 8-8 8L32 264c-4.4 0-8-3.6-8-8s3.6-8 8-8l384 0c4.4 0 8 3.6 8 8z" />
    </Icon>
);

export default Minus;