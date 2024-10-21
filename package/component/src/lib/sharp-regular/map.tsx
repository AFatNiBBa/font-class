
import { Icon } from "../../index";

/**
 * A component that renders the `map` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map?s=sharp-regular map}
 * @preview ![map](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/map.svg)
 */
const Map: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M168 373.4l-120 40 0-282.8 120-40 0 282.8zm192 48l-144-48 0-282.8 144 48 0 282.8zm48 0l0-282.8 120-40 0 282.8-120 40zM0 480l48-16 144-48 192 64 192-64 0-333.4L576 32 528 48 384 96 192 32 0 96 0 429.4 0 480z" />
    </Icon>
);

export default Map;