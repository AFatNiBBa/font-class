
import { Icon } from "../../index";

/**
 * A component that renders the `clock-desk` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-desk?s=sharp-regular clock-desk}
 * @preview ![clock-desk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/clock-desk.svg)
 */
const ClockDesk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 224A176 176 0 1 0 48 224a176 176 0 1 0 352 0zM224 0C347.7 0 448 100.3 448 224l0 288L0 512 0 224C0 100.3 100.3 0 224 0zm24 96l0 24 0 94.1 41 41 17 17L272 305.9l-17-17-48-48-7-7 0-9.9 0-104 0-24 48 0z" />
    </Icon>
);

export default ClockDesk;