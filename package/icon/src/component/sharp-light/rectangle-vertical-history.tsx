
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-vertical-history` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical-history?s=sharp-light rectangle-vertical-history}
 * @preview ![rectangle-vertical-history](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/rectangle-vertical-history.svg)
 */
const RectangleVerticalHistory: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 32l0 448 320 0 0-448L224 32zM192 0l32 0L544 0l32 0 0 32 0 448 0 32-32 0-320 0-32 0 0-32 0-448 0-32zM96 48l32 0 0 416-32 0L96 48zM0 96l32 0 0 320L0 416 0 96z" />
    </Icon>
);

export default RectangleVerticalHistory;