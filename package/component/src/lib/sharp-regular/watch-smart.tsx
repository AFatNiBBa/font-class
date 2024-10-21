
import { Icon } from "../../index";

/**
 * A component that renders the `watch-smart` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch-smart?s=sharp-regular watch-smart}
 * @preview ![watch-smart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/watch-smart.svg)
 */
const WatchSmart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 0L320 0l0 64 16 0 48 0 0 48 0 288 0 48-48 0-16 0 0 64L64 512l0-64-16 0L0 448l0-48L0 112 0 64l48 0 16 0L64 0zM48 112l0 288 288 0 0-288L48 112zm168 72l0 60.8 39.4 32.8 18.4 15.4-30.7 36.9-18.4-15.4-48-40-8.6-7.2 0-11.2 0-72 0-24 48 0 0 24z" />
    </Icon>
);

export default WatchSmart;