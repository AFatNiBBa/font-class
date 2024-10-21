
import { Icon } from "../../index";

/**
 * A component that renders the `wrench` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wrench?s=sharp-thin wrench}
 * @preview ![wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/wrench.svg)
 */
const Wrench: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 176l0 16 16 0 64 0 6.6 0 4.7-4.7 76.2-76.2c5.5 15.2 8.5 31.7 8.5 48.9c0 79.5-64.5 144-144 144c-15.2 0-29.9-2.4-43.7-6.7l-9.3-2.9-6.9 6.9L104 489.4 22.6 408 210.8 219.8l6.9-6.9-2.9-9.3c-4.4-13.8-6.7-28.4-6.7-43.7c0-79.5 64.5-144 144-144c17.2 0 33.6 3 48.9 8.5l-76.2 76.2-4.7 4.7 0 6.6 0 64zM492.5 83.5L480.7 95.3 400 176l-48 0-16 0 0-16 0-48 80.7-80.7 11.8-11.8c-5-2.7-10.1-5.1-15.3-7.3C394.4 4.3 373.7 0 352 0C263.6 0 192 71.6 192 160c0 16.9 2.6 33.2 7.5 48.5L11.3 396.7 0 408l11.3 11.3 81.4 81.4L104 512l11.3-11.3L303.5 312.5c15.3 4.9 31.6 7.5 48.5 7.5c88.4 0 160-71.6 160-160c0-21.7-4.3-42.4-12.1-61.2c-2.2-5.2-4.6-10.4-7.3-15.3zM112 422.6L134.6 400 112 377.4 89.4 400 112 422.6z" />
    </Icon>
);

export default Wrench;