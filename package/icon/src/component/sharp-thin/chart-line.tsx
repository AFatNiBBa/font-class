
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line?s=sharp-thin chart-line}
 * @preview ![chart-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chart-line.svg)
 */
const ChartLine: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 40l0-8L0 32l0 8L0 472l0 8 8 0 496 0 8 0 0-16-8 0L16 464 16 40zM477.7 141.7l5.7-5.7L472 124.7l-5.7 5.7L320 276.7l-90.3-90.3-5.7-5.7-5.7 5.7-128 128L84.7 320 96 331.3l5.7-5.7L224 203.3l90.3 90.3 5.7 5.7 5.7-5.7 152-152z" />
    </Icon>
);

export default ChartLine;