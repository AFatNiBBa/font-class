
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-vertical-history` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical-history?s=sharp-regular rectangle-vertical-history}
 * @preview ![rectangle-vertical-history](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/rectangle-vertical-history.svg)
 */
const RectangleVerticalHistory: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M240 48l0 416 288 0 0-416L240 48zM192 0l48 0L528 0l48 0 0 48 0 416 0 48-48 0-288 0-48 0 0-48 0-416 0-48zM96 48l48 0 0 416-48 0L96 48zM0 96l48 0 0 320L0 416 0 96z" />
    </Icon>
);

export default RectangleVerticalHistory;