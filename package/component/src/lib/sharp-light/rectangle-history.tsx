
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-history` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-history?s=sharp-light rectangle-history}
 * @preview ![rectangle-history](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/rectangle-history.svg)
 */
const RectangleHistory: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 160L32 160l0 320 448 0 0-320zm32-32l0 32 0 320 0 32-32 0L32 512 0 512l0-32L0 160l0-32 32 0 448 0 32 0zM464 64l0 32L48 96l0-32 416 0zM416 0l0 32L96 32 96 0 416 0z" />
    </Icon>
);

export default RectangleHistory;