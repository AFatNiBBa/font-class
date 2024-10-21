
import { Icon } from "../../index";

/**
 * A component that renders the `clock-desk` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-desk?s=light clock-desk}
 * @preview ![clock-desk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/clock-desk.svg)
 */
const ClockDesk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 224a192 192 0 1 1 384 0A192 192 0 1 1 32 224zM416 339.4L416 448c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-108.6C71.2 404.5 142.5 448 224 448s152.8-43.5 192-108.6zM0 224L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-224C448 100.3 347.7 0 224 0S0 100.3 0 224zM224 96c-8.8 0-16 7.2-16 16l0 112c0 4.2 1.7 8.3 4.7 11.3l48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L240 217.4 240 112c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default ClockDesk;