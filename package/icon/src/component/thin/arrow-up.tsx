
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up?s=thin arrow-up}
 * @preview ![arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-up.svg)
 */
const ArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M197.8 34.5c-1.5-1.6-3.6-2.5-5.8-2.5s-4.3 .9-5.8 2.5l-184 192c-3.1 3.2-2.9 8.3 .2 11.3s8.3 2.9 11.3-.2L184 59.9 184 472c0 4.4 3.6 8 8 8s8-3.6 8-8l0-412.1L370.2 237.5c3.1 3.2 8.1 3.3 11.3 .2s3.3-8.1 .2-11.3l-184-192z" />
    </Icon>
);

export default ArrowUp;