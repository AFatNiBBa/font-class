
import { Icon } from "../../index";

/**
 * A component that renders the `bell-plus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-plus?s=sharp-thin bell-plus}
 * @preview ![bell-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bell-plus.svg)
 */
const BellPlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M216 0l16 0 0 32.2c84.6 4.2 152 74.1 152 159.8l0 93.2L446.2 363l1.8 2.2 0 2.8 0 40 0 8-8 0L8 416l-8 0 0-8 0-40 0-2.8L1.8 363 64 285.2 64 192c0-85.7 67.4-155.6 152-159.8L216 0zm8 48C144.5 48 80 112.5 80 192l0 96 0 2.8L78.2 293 16 370.8 16 400l416 0 0-29.2L369.8 293l-1.8-2.2 0-2.8 0-96c0-79.5-64.5-144-144-144zM190.1 481.9c9 9 21.2 14.1 33.9 14.1s24.9-5.1 33.9-14.1s14.1-21.2 14.1-33.9l16 0c0 17-6.7 33.3-18.7 45.3s-28.3 18.7-45.3 18.7s-33.3-6.7-45.3-18.7s-18.7-28.3-18.7-45.3l16 0c0 12.7 5.1 24.9 14.1 33.9zM232 160l0 8 0 64 64 0 8 0 0 16-8 0-64 0 0 64 0 8-16 0 0-8 0-64-64 0-8 0 0-16 8 0 64 0 0-64 0-8 16 0z" />
    </Icon>
);

export default BellPlus;