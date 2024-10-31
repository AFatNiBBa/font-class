
import { Icon } from "../../index";

/**
 * A component that renders the `clock-desk` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-desk?s=sharp-solid clock-desk}
 * @preview ![clock-desk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clock-desk.svg)
 */
const ClockDesk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 224a224 224 0 1 1 448 0A224 224 0 1 1 0 224zM248 96l-48 0 0 24 0 104 0 9.9 7 7 48 48 17 17L305.9 272l-17-17-41-41 0-94.1 0-24zM224 480c96.4 0 180.3-53.3 224-132l0 164L0 512 0 348c43.7 78.7 127.6 132 224 132z" />
    </Icon>
);

export default ClockDesk;