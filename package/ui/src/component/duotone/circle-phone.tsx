
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-phone` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone?s=duotone circle-phone}
 * @preview ![circle-phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-phone.svg)
 */
const CirclePhone: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-96c0-9 6-16.9 14.7-19.3c14.7-4 29.3-8 44-12c1.8-.5 3.5-.7 5.3-.7c7.9 0 15.3 4.7 18.5 12.3c6.7 16 13.3 32 20 48c3.4 8.2 1 17.6-5.8 23.2c-8.2 6.7-16.4 13.5-24.7 20.2c16.6 35.2 45.1 63.7 80.3 80.3c6.7-8.2 13.5-16.4 20.2-24.7c5.6-6.8 15-9.2 23.2-5.8c16 6.7 32 13.3 48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C368.9 378 361 384 352 384c-123.7 0-224-100.3-224-224z" />
        <path d="M210.5 140.3c-3.9-9.3-14-14.2-23.7-11.6l-44 12C134 143.1 128 151 128 160c0 123.7 100.3 224 224 224c9 0 16.9-6 19.3-14.7l12-44c2.6-9.7-2.3-19.9-11.6-23.7l-48-20c-8.2-3.4-17.6-1-23.2 5.8L280.3 312c-35.2-16.6-63.7-45.1-80.3-80.3l24.7-20.2c6.8-5.6 9.2-15 5.8-23.2l-20-48z" />
    </Icon>
);

export default CirclePhone;