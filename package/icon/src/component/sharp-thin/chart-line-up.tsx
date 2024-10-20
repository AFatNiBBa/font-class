
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-up?s=sharp-thin chart-line-up}
 * @preview ![chart-line-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chart-line-up.svg)
 */
const ChartLineUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 40l0-8L0 32l0 8L0 472l0 8 8 0 496 0 8 0 0-16-8 0L16 464 16 40zm336 88l-8 0 0 16 8 0 100.7 0L288 308.7l-90.3-90.3-5.7-5.7-5.7 5.7-96 96L84.7 320 96 331.3l5.7-5.7L192 235.3l90.3 90.3 5.7 5.7 5.7-5.7L464 155.3 464 256l0 8 16 0 0-8 0-120 0-8-8 0-120 0z" />
    </Icon>
);

export default ChartLineUp;