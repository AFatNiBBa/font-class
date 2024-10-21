
import { Icon } from "../../index";

/**
 * A component that renders the `ruler` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler?s=sharp-light ruler}
 * @preview ![ruler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ruler.svg)
 */
const Ruler: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 160l-22.6-22.6L374.6 22.6 352 0 329.4 22.6 22.6 329.4 0 352l22.6 22.6L137.4 489.4 160 512l22.6-22.6L489.4 182.6 512 160zM352 45.3L466.7 160 160 466.7 45.3 352l46.1-46.1 41.4 41.4L144 358.6 166.6 336l-11.3-11.3-41.4-41.4 41.4-41.4 41.4 41.4L208 294.6 230.6 272l-11.3-11.3-41.4-41.4 41.4-41.4 41.4 41.4L272 230.6 294.6 208l-11.3-11.3-41.4-41.4 41.4-41.4 41.4 41.4L336 166.6 358.6 144l-11.3-11.3L305.9 91.3 352 45.3z" />
    </Icon>
);

export default Ruler;