
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-vertical` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical?s=solid rectangle-vertical}
 * @preview ![rectangle-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/rectangle-vertical.svg)
 */
const RectangleVertical: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L320 0z" />
    </Icon>
);

export default RectangleVertical;