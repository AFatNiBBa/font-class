
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-half` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half?s=thin diamond-half}
 * @preview ![diamond-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/diamond-half.svg)
 */
const DiamondHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M227.7 11.7C235.5 3.9 245.8 0 256 0l0 16 0 480 0 16c-10.2 0-20.5-3.9-28.3-11.7l-216-216c-15.6-15.6-15.6-40.9 0-56.6l216-216zM240 489.9l0-467.8c-.3 .3-.7 .6-1 .9L23 239c-9.4 9.4-9.4 24.6 0 33.9L239 489c.3 .3 .6 .6 1 .9z" />
    </Icon>
);

export default DiamondHalf;