
import { Icon } from "../../index";

/**
 * A component that renders the `bell-ring` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-ring?s=sharp-regular bell-ring}
 * @preview ![bell-ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bell-ring.svg)
 */
const BellRing: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 0L224 0l0 51.2C151 66 96 130.6 96 208l0 88L32 368l0 48 48 0 352 0 48 0 0-48-64-72 0-88c0-77.4-55-142-128-156.8L288 0zm80 314.2l12.1 13.6L415.8 368 96.2 368l35.7-40.1L144 314.2l0-18.2 0-88c0-61.9 50.1-112 112-112s112 50.1 112 112l0 88 0 18.2zM320 448l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3zM112.6 49.4L79.4 14.6C30.5 61.2 0 127.1 0 200l48 0c0-59.3 24.8-112.7 64.6-150.6zM464 200l48 0c0-72.9-30.5-138.8-79.4-185.4L399.4 49.4C439.2 87.3 464 140.7 464 200z" />
    </Icon>
);

export default BellRing;