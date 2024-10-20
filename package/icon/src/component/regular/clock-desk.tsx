
import { Icon } from "../../index";

/**
 * A component that renders the `clock-desk` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-desk?s=regular clock-desk}
 * @preview ![clock-desk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/clock-desk.svg)
 */
const ClockDesk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 224A176 176 0 1 0 48 224a176 176 0 1 0 352 0zM224 0C347.7 0 448 100.3 448 224l0 240c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 224C0 100.3 100.3 0 224 0zm0 96c13.3 0 24 10.7 24 24l0 94.1 41 41c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-4.5-4.5-7-10.6-7-17l0-104c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default ClockDesk;