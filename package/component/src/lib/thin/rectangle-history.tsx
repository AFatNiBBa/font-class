
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-history` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-history?s=thin rectangle-history}
 * @preview ![rectangle-history](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/rectangle-history.svg)
 */
const RectangleHistory: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 192c0-26.5-21.5-48-48-48L64 144c-26.5 0-48 21.5-48 48l0 256c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-256zm-48-64c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l384 0zm8-64c4.4 0 8 3.6 8 8s-3.6 8-8 8L56 80c-4.4 0-8-3.6-8-8s3.6-8 8-8l400 0zM408 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L104 16c-4.4 0-8-3.6-8-8s3.6-8 8-8L408 0z" />
    </Icon>
);

export default RectangleHistory;