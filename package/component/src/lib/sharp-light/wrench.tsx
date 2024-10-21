
import { Icon } from "../../index";

/**
 * A component that renders the `wrench` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wrench?s=sharp-light wrench}
 * @preview ![wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/wrench.svg)
 */
const Wrench: typeof Icon = x => (
    <Icon {...x}>
        <path d="M318.1 283.5l-17.9-4.9L287 291.7l-175 175L45.3 400l175-175 13.1-13.1-4.9-17.9c-2.9-10.8-4.5-22.1-4.5-33.9c0-70.7 57.3-128 128-128c10.7 0 21.1 1.3 31 3.8L329.4 89.4 320 98.7l0 13.3 0 48 0 32 32 0 48 0 13.3 0 9.4-9.4L476.2 129c2.5 9.9 3.8 20.3 3.8 31c0 70.7-57.3 128-128 128c-11.8 0-23.1-1.6-33.9-4.5zM112 512l22.6-22.6 175-175c13.5 3.7 27.7 5.7 42.3 5.7c88.4 0 160-71.6 160-160c0-19.9-3.6-38.9-10.3-56.5c-4-10.6-9.1-20.7-15.2-30.1L463.3 96.7 400 160l-16 0-32 0 0-32 0-16 63.3-63.3 23.3-23.3c-9.4-6.1-19.5-11.2-30.1-15.2C390.9 3.6 371.9 0 352 0C263.6 0 192 71.6 192 160c0 14.7 2 28.9 5.7 42.3l-175 175L0 400l22.6 22.6 66.7 66.7L112 512zm8-97.4L142.6 392 120 369.4 97.4 392 120 414.6z" />
    </Icon>
);

export default Wrench;