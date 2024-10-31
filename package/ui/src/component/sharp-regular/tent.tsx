
import { Icon } from "../../index";

/**
 * A component that renders the `tent` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tent?s=sharp-regular tent}
 * @preview ![tent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tent.svg)
 */
const Tent: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48.2 512L0 512l4.4-48L32 160 288 0l23.3 16 .7 0 0 .5L544 176l27.4 288 4.6 48-48.2 0L440 512l-176 0L48.2 512zm365.4-48l109.6 0L498.3 202.9 312 74.7l0 204.5L413.6 464zM264 71.6L77.6 188.1 52.6 464 264 464l0-136 0-136 0-120.4z" />
    </Icon>
);

export default Tent;