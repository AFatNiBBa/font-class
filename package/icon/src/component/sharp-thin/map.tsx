
import { Icon } from "../../index";

/**
 * A component that renders the `map` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map?s=sharp-thin map}
 * @preview ![map](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/map.svg)
 */
const Map: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M176 401.8L16 457.5l0-350.1L176 51.7l0 350.1zm208 59L192 401.7l0-350.5 192 59.1 0 350.5zm16-.5l0-350.1L560 54.5l0 350.1L400 460.3zM0 480l16-5.6L184 416l208 64 184-64 0-367.1L576 32l-16 5.6L392 96 184 32 0 96 0 463.1 0 480z" />
    </Icon>
);

export default Map;