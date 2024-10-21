
import { Icon } from "../../index";

/**
 * A component that renders the `bell-ring` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-ring?s=sharp-light bell-ring}
 * @preview ![bell-ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bell-ring.svg)
 */
const BellRing: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 0l32 0 0 32.8c80.9 8 144 76.2 144 159.2l0 97.4 59.3 59.3 4.7 4.7 0 6.6 0 40 0 16-16 0L48 416l-16 0 0-16 0-40 0-6.6 4.7-4.7L96 289.4 96 192c0-83 63.1-151.2 144-159.2L240 0zm16 64c-70.7 0-128 57.3-128 128l0 104 0 6.6-4.7 4.7L64 366.6 64 384l384 0 0-17.4-59.3-59.3-4.7-4.7 0-6.6 0-104c0-70.7-57.3-128-128-128zM192 448l32 0c0 17.7 14.3 32 32 32s32-14.3 32-32l32 0c0 35.3-28.7 64-64 64s-64-28.7-64-64zM117.3 44.3C74.9 79.5 48 132.6 48 192l-32 0C16 122.7 47.5 60.8 96.9 19.7l20.5 24.6zM467.1 192c0-59.4-26.9-112.5-69.3-147.7l20.5-24.6c49.4 41.1 80.9 103 80.9 172.3l-32 0z" />
    </Icon>
);

export default BellRing;