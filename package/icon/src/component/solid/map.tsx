
import { Icon } from "../../index";

/**
 * A component that renders the `map` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map?s=solid map}
 * @preview ![map](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/map.svg)
 */
const Map: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M384 476.1L192 421.2l0-385.3L384 90.8l0 385.3zm32-1.2l0-386.5L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2l0 386.5L32.9 474.5C17.1 480.8 0 469.2 0 452.2L0 117.4c0-9.8 6-18.6 15.1-22.3z" />
    </Icon>
);

export default Map;