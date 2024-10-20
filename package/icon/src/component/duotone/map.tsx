
import { Icon, generic } from "../../index";

/**
 * A component that renders the `map` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map?s=duotone map}
 * @preview ![map](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/map.svg)
 */
const Map: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M192 32c.1 128 .1 256 .1 384c64 21.3 128 42.7 192 64l0-384C320 74.7 256 53.3 192 32z" />
        <path d="M0 114.5V464c0 11.3 11.5 19 22 14.8L192 416l-.1-384L10.1 99.6C4 102 0 107.9 0 114.5zM554 33.2L384 96V480l181.9-67.6c6.1-2.4 10.1-8.3 10.1-14.9V48c0-11.3-11.4-19.1-22-14.9z" />
    </Icon>
);

export default Map;