
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right?s=thin arrow-right}
 * @preview ![arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-right.svg)
 */
const ArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M445.5 261.8c1.6-1.5 2.5-3.6 2.5-5.8s-.9-4.3-2.5-5.8l-192-184c-3.2-3.1-8.3-2.9-11.3 .2s-2.9 8.3 .2 11.3L420.1 248 8 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l412.1 0L242.5 434.2c-3.2 3.1-3.3 8.1-.2 11.3s8.1 3.3 11.3 .2l192-184z" />
    </Icon>
);

export default ArrowRight;