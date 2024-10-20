
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-vertical` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical?s=thin rectangle-vertical}
 * @preview ![rectangle-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/rectangle-vertical.svg)
 */
const RectangleVertical: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 448c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l256 0c26.5 0 48 21.5 48 48l0 384zM384 64c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384z" />
    </Icon>
);

export default RectangleVertical;