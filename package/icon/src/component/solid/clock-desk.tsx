
import { Icon } from "../../index";

/**
 * A component that renders the `clock-desk` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-desk?s=solid clock-desk}
 * @preview ![clock-desk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/clock-desk.svg)
 */
const ClockDesk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 224a224 224 0 1 1 448 0A224 224 0 1 1 0 224zM224 96c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41 0-94.1c0-13.3-10.7-24-24-24zm0 384c96.4 0 180.3-53.3 224-132l0 116c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 348c43.7 78.7 127.6 132 224 132z" />
    </Icon>
);

export default ClockDesk;