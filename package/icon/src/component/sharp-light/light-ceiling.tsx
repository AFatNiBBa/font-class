
import { Icon } from "../../index";

/**
 * A component that renders the `light-ceiling` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-ceiling?s=sharp-light light-ceiling}
 * @preview ![light-ceiling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/light-ceiling.svg)
 */
const LightCeiling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 0l0 16 0 144.5C395.3 168.1 494.9 262.9 510 384c1.3 10.5 2 21.2 2 32l-32 0L32 416 0 416c0-10.8 .7-21.5 2-32C17.1 262.9 116.7 168.1 240 160.5L240 16l0-16 32 0zM34.3 384l443.5 0C462.2 275.4 368.8 192 256 192S49.8 275.4 34.3 384zM256 512c-38.7 0-71-27.5-78.4-64l33.1 0c6.6 18.6 24.4 32 45.3 32s38.7-13.4 45.3-32l33.1 0c-7.4 36.5-39.7 64-78.4 64z" />
    </Icon>
);

export default LightCeiling;