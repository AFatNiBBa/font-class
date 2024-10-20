
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-vertical-history` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical-history?s=sharp-solid rectangle-vertical-history}
 * @preview ![rectangle-vertical-history](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/rectangle-vertical-history.svg)
 */
const RectangleVerticalHistory: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 0L192 0l0 512 384 0L576 0zM96 48l0 416 48 0 0-416L96 48zM0 96L0 416l48 0L48 96 0 96z" />
    </Icon>
);

export default RectangleVerticalHistory;