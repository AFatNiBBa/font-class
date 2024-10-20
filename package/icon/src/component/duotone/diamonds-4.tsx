
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diamonds-4` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamonds-4?s=duotone diamonds-4}
 * @preview ![diamonds-4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/diamonds-4.svg)
 */
const Diamonds_4: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M153.7 85.8c-12.5 12.5-12.5 32.8 0 45.3l79.7 79.7c12.5 12.5 32.8 12.5 45.3 0L358.3 131c12.5-12.5 12.5-32.8 0-45.3L284.3 11.7C276.5 3.9 266.2 0 256 0s-20.5 3.9-28.3 11.7L153.7 85.8zm0 295.2c-12.5 12.5-12.5 32.8 0 45.3l74.1 74.1c7.8 7.8 18 11.7 28.3 11.7s20.5-3.9 28.3-11.7l74.1-74.1c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6l-79.7-79.7c-12.5-12.5-32.8-12.5-45.3 0L153.7 381z" />
        <path d="M131 153.7c-12.5-12.5-32.8-12.5-45.3 0L11.7 227.7c-15.6 15.6-15.6 40.9 0 56.6l74.1 74.1c12.5 12.5 32.8 12.5 45.3 0l79.7-79.7c12.5-12.5 12.5-32.8 0-45.3L131 153.7zM381 358.3c12.5 12.5 32.8 12.5 45.3 0l74.1-74.1c15.6-15.6 15.6-40.9 0-56.6l-74.1-74.1c-12.5-12.5-32.8-12.5-45.3 0l-79.7 79.7c-12.5 12.5-12.5 32.8 0 45.3L381 358.3z" />
    </Icon>
);

export default Diamonds_4;