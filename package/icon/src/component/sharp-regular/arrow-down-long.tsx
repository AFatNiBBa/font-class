
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-long` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-long?s=sharp-regular arrow-down-long}
 * @preview ![arrow-down-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-down-long.svg)
 */
const ArrowDownLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M175 495l17 17 17-17L345 359l17-17L328 308.1l-17 17-95 95L216 24l0-24L168 0l0 24 0 396.1-95-95-17-17L22.1 342.1l17 17L175 495z" />
    </Icon>
);

export default ArrowDownLong;