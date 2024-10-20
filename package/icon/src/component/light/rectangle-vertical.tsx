
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-vertical` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical?s=light rectangle-vertical}
 * @preview ![rectangle-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/rectangle-vertical.svg)
 */
const RectangleVertical: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 448c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 384zM384 64c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384z" />
    </Icon>
);

export default RectangleVertical;