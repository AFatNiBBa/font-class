
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-heart` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-heart?s=duotone shield-heart}
 * @preview ![shield-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shield-heart.svg)
 */
const ShieldHeart: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 139.7c.5 99.5 41.3 281 213.6 363.5c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c0-26.4-16.4-47.9-38.3-57.2L269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8C32.4 92.1 16 113.6 16 139.7zm352 81.8c0-.4 0-.3 0 0z" />
        <path d="M205.3 160c-33.8 0-61.3 27.4-61.3 61.3c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3c0-33.8-27.4-61.3-61.3-61.3c-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9z" />
    </Icon>
);

export default ShieldHeart;