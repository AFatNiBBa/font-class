
import { Icon } from "../../index";

/**
 * A component that renders the `scythe` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scythe?s=solid scythe}
 * @preview ![scythe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/scythe.svg)
 */
const Scythe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M614.7 .7c5.6 1.2 10.5 3.8 14.5 7.3c8.4 7.4 12.6 19 10.1 30.7l-4.8 22.6L577.6 326.7l-34.3 160c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38l26-121.3L416 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l104.4 0L569 61.3l7.7-36s0 0 0 0L582.1 0 608 0c2.2 0 4.5 .2 6.7 .7zM352 0L549.4 0l-4 18.6L508.3 192 12.7 192C5.7 192 0 186.3 0 179.2c0-2.1 .5-4.1 1.6-6C15 151.1 114.8 0 352 0z" />
    </Icon>
);

export default Scythe;