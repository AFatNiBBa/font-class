
import { Icon } from "../../index";

/**
 * A component that renders the `industry` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/industry?s=light industry}
 * @preview ![industry](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/industry.svg)
 */
const Industry: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 64c-8.8 0-16 7.2-16 16l0 224 0 48 0 64c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-96 0-16 0-145.1c0-6.5-7.4-10.3-12.7-6.5l-138 99.3c-4.9 3.5-11.3 4-16.6 1.3s-8.7-8.2-8.7-14.2l0-81.9c0-6.4-7.1-10.2-12.4-6.7L184.9 242.6c-4.9 3.3-11.2 3.6-16.4 .8s-8.5-8.2-8.5-14.1L160 80c0-8.8-7.2-16-16-16L80 64zM32 80c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48l0 119.4 113.8-75.9c26.6-17.7 62.2 1.3 62.2 33.3l0 50.6 112.6-81.1c26.5-19.1 63.4-.1 63.4 32.5L544 304l0 16 0 96c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-64 0-48L32 80z" />
    </Icon>
);

export default Industry;