
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-up?s=sharp-light chart-line-up}
 * @preview ![chart-line-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chart-line-up.svg)
 */
const ChartLineUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 48l0-16L0 32 0 48 0 464l0 16 16 0 480 0 16 0 0-32-16 0L32 448 32 48zm304 80l-16 0 0 32 16 0 89.4 0L320 265.4l-84.7-84.7L224 169.4l-11.3 11.3-112 112L89.4 304 112 326.6l11.3-11.3L224 214.6l84.7 84.7L320 310.6l11.3-11.3L448 182.6l0 89.4 0 16 32 0 0-16 0-128 0-16-16 0-128 0z" />
    </Icon>
);

export default ChartLineUp;