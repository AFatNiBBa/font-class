
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-vertical-history` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical-history?s=sharp-thin rectangle-vertical-history}
 * @preview ![rectangle-vertical-history](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/rectangle-vertical-history.svg)
 */
const RectangleVerticalHistory: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M208 16l0 480 352 0 0-480L208 16zM192 0l16 0L560 0l16 0 0 16 0 480 0 16-16 0-352 0-16 0 0-16 0-480 0-16zM96 48l16 0 0 416-16 0L96 48zM0 96l16 0 0 320L0 416 0 96z" />
    </Icon>
);

export default RectangleVerticalHistory;