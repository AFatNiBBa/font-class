
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-simple?s=sharp-duotone-solid chart-simple}
 * @preview ![chart-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-simple.svg)
 */
const ChartSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M160 32l128 0 0 448-128 0 0-448z" />
        <path d="M448 96L320 96l0 384 128 0 0-384zM128 224L0 224 0 480l128 0 0-256z" />
    </Icon>
);

export default ChartSimple;