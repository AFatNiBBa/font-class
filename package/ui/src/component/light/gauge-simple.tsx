
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple?s=light gauge-simple}
 * @preview ![gauge-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/gauge-simple.svg)
 */
const GaugeSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96c35.3 0 64-28.7 64-64c0-29.8-20.4-54.9-48-62l0-194c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 194c-27.6 7.1-48 32.2-48 62c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default GaugeSimple;