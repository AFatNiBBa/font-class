
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plate-utensils` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plate-utensils?s=sharp-duotone-solid plate-utensils}
 * @preview ![plate-utensils](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/plate-utensils.svg)
 */
const PlateUtensils: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M152 256.6l0 127.1C192.5 441.9 259.8 480 336 480c89.4 0 166.5-52.3 202.4-128L512 352l-32 0 0-26.2C454.1 379.2 399.3 416 336 416c-88.4 0-160-71.6-160-160c0-4.2 .2-8.3 .5-12.4c-7.5 5.3-15.7 9.7-24.5 13.1zM202.9 75.8L222.7 143c29-29 69-47 113.3-47c63.3 0 118.1 36.8 144 90.2l0-26.2c0-25.1 4.2-46.8 11.2-65.5C450.9 55.8 396.2 32 336 32c-49.8 0-95.9 16.3-133.1 43.8zM208 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0z" />
        <path d="M40 16l16 0 0 136 16 0L88 16l16 0 16 136 16 0 0-136 16 0 40 136c0 41.5-31.6 75.6-72 79.6L120 472l0 24-48 0 0-24 0-240.4c-40.4-4-72-38.1-72-79.6L40 16zM512 160C512 32 640 16 640 16l0 176 0 24 0 104 0 152 0 24-48 0 0-24 0-152-80 0 0-160z" />
    </Icon>
);

export default PlateUtensils;