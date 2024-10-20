
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right?s=sharp-thin arrow-right}
 * @preview ![arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-right.svg)
 */
const ArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M437.5 261.8l6-5.8-6-5.8-184-176-5.8-5.5L236.7 80.2l5.8 5.5L412.1 248 8 248l-8 0 0 16 8 0 404.1 0L242.5 426.2l-5.8 5.5 11.1 11.6 5.8-5.5 184-176z" />
    </Icon>
);

export default ArrowRight;