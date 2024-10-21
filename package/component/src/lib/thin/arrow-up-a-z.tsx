
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-a-z` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-a-z?s=thin arrow-up-a-z}
 * @preview ![arrow-up-a-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-up-a-z.svg)
 */
const ArrowUpAZ: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M154.3 34.3c3.1-3.1 8.2-3.1 11.3 0l112 112c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L168 59.3 168 472c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-412.7L53.7 157.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l112-112zM336 296c0-4.4 3.6-8 8-8l144 0c3.1 0 5.9 1.8 7.2 4.6s.9 6.1-1 8.5L360.9 464 488 464c4.4 0 8 3.6 8 8s-3.6 8-8 8l-144 0c-3.1 0-5.9-1.8-7.2-4.6s-.9-6.1 1-8.5L471.1 304 344 304c-4.4 0-8-3.6-8-8zM416 32c3 0 5.8 1.7 7.2 4.4l63.9 127.9 .1 .3 23.9 47.8c2 4 .4 8.8-3.6 10.7s-8.8 .4-10.7-3.6L475.1 176l-118.1 0-21.8 43.6c-2 4-6.8 5.6-10.7 3.6s-5.6-6.8-3.6-10.7l23.9-47.8 .1-.3L408.8 36.4c1.4-2.7 4.1-4.4 7.2-4.4zm0 25.9L364.9 160l102.1 0L416 57.9z" />
    </Icon>
);

export default ArrowUpAZ;