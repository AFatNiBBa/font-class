
import { Icon } from "../../index";

/**
 * A component that renders the `chart-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-simple?s=sharp-solid chart-simple}
 * @preview ![chart-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-simple.svg)
 */
const ChartSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 32l128 0 0 448-128 0 0-448zM0 224l128 0 0 256L0 480 0 224zM448 96l0 384-128 0 0-384 128 0z" />
    </Icon>
);

export default ChartSimple;