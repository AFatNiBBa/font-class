
import { Icon } from "../../index";

/**
 * A component that renders the `radio` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radio?s=light radio}
 * @preview ![radio](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/radio.svg)
 */
const Radio: typeof Icon = x => (
    <Icon {...x}>
        <path d="M500.1 31.5c8.5-2.3 13.6-11 11.3-19.6s-11-13.6-19.6-11.3L59.4 115.9c-31.3 8.4-54.1 34.6-58.6 66C.3 185.2 0 188.5 0 192l0 1.2L0 240 0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-309.9 0 362-96.5zM32 193.2c0-2.2 .1-4.3 .4-6.4C34.9 171.6 48.1 160 64 160l384 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-208 0-46.8zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0zM80 304c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 304zm16 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0zm256 16a64 64 0 1 1 0-128 64 64 0 1 1 0 128zm-96-64a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
    </Icon>
);

export default Radio;