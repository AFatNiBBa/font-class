
import { Icon } from "../../index";

/**
 * A component that renders the `boot-heeled` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot-heeled?s=regular boot-heeled}
 * @preview ![boot-heeled](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/boot-heeled.svg)
 */
const BootHeeled: typeof Icon = x => (
    <Icon {...x}>
        <path d="M31.3 0C14 0 0 14 0 31.3c0 1.8 .1 3.9 .6 6.2C2.6 47.1 24 154.3 24 232c0 33.2-12.8 93.5-19.7 123.2C1.6 367 0 379.3 0 391.8L0 440l0 48c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-22.7 121.6 40.5c12.2 4.1 25 6.2 37.9 6.2L456 512l32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-33.3c0-28.1-16.3-53.6-41.8-65.4L313.8 307.9c-25.5-11.8-41.8-37.3-41.8-65.4L272 24c0-13.3-10.7-24-24-24L31.3 0zM432 430.7l0 33.3-144.4 0c-7.7 0-15.4-1.2-22.8-3.7L135.6 417.2c-2.4-.8-5-1.2-7.6-1.2l-24 0-56 0 0-24.2c0-8.5 1.1-17.2 3.1-25.8C57.6 337.7 72 271.8 72 232C72 167.4 58.5 85.7 51.5 48L96 48l0 184c0 13.3 10.7 24 24 24s24-10.7 24-24l0-184 80 0 0 194.6c0 46.8 27.2 89.3 69.7 109l124.3 57.4c8.5 3.9 13.9 12.4 13.9 21.8z" />
    </Icon>
);

export default BootHeeled;