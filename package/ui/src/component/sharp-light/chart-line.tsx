
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line?s=sharp-light chart-line}
 * @preview ![chart-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chart-line.svg)
 */
const ChartLine: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 48l0-16L0 32 0 48 0 464l0 16 16 0 480 0 16 0 0-32-16 0L32 448 32 48zM475.3 155.3L486.6 144 464 121.4l-11.3 11.3L320 265.4l-84.7-84.7L224 169.4l-11.3 11.3-112 112L89.4 304 112 326.6l11.3-11.3L224 214.6l84.7 84.7L320 310.6l11.3-11.3 144-144z" />
    </Icon>
);

export default ChartLine;