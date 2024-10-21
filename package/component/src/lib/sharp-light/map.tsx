
import { Icon } from "../../index";

/**
 * A component that renders the `map` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map?s=sharp-light map}
 * @preview ![map](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/map.svg)
 */
const Map: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 387.8L32 434.3l0-315.9L160 71.9l0 315.9zm224 54.4L192 387.3l0-317.4 192 54.9 0 317.4zm32-2l0-315.9L544 77.7l0 315.9L416 440.1zM0 480l32-11.6L176 416l224 64 176-64 0-350 0-34L544 43.6 400 96 176 32 0 96 0 445.9 0 480z" />
    </Icon>
);

export default Map;