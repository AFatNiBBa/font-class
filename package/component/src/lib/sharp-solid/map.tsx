
import { Icon } from "../../index";

/**
 * A component that renders the `map` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map?s=sharp-solid map}
 * @preview ![map](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/map.svg)
 */
const Map: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 96L0 480l160-64 0-384L0 96zm416 0l0 384 160-64 0-384L416 96zM384 480l0-384L192 32l0 384 192 64z" />
    </Icon>
);

export default Map;