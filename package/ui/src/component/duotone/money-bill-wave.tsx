
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bill-wave` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-wave?s=duotone money-bill-wave}
 * @preview ![money-bill-wave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/money-bill-wave.svg)
 */
const MoneyBillWave: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 208l0 144c33.9 0 61.6 26.3 63.9 59.7c40-.9 83.5-10.5 134.2-23.2c4.7-1.2 9.4-2.3 14.2-3.6c51.1-12.8 110.4-27.8 172.9-28.6c5.5-29.8 31.6-52.4 63-52.4l0-144c-33.9 0-61.6-26.3-63.9-59.7c-40 .9-83.5 10.5-134.2 23.2c-4.6 1.2-9.4 2.3-14.2 3.6c-51.1 12.8-110.4 27.8-172.9 28.6C121.5 185.4 95.4 208 64 208zm144 48c0-53 35.8-96 80-96s80 43 80 96s-35.8 96-80 96s-80-43-80-96z" />
        <path d="M0 112.5L0 422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4l0-309.9c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM512 160l0 144c-31.4 0-57.5 22.6-63 52.4c-62.5 .8-121.8 15.7-172.9 28.6c0 0 0 0 0 0c-4.8 1.2-9.5 2.4-14.2 3.6c-50.7 12.6-94.1 22.2-134.2 23.2C125.6 378.3 97.9 352 64 352l0-144c31.4 0 57.5-22.6 63-52.4c62.5-.8 121.8-15.7 172.9-28.6c0 0 0 0 0 0c4.8-1.2 9.5-2.4 14.2-3.6c50.7-12.6 94.1-22.2 134.2-23.2c2.2 33.3 30 59.7 63.9 59.7z" />
    </Icon>
);

export default MoneyBillWave;