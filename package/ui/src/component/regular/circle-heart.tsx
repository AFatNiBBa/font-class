
import { Icon } from "../../index";

/**
 * A component that renders the `circle-heart` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-heart?s=regular circle-heart}
 * @preview ![circle-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-heart.svg)
 */
const CircleHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM131.9 280.9L233.5 384.1c6.2 6.3 14.3 9.4 22.5 9.4s16.3-3.1 22.5-9.4L380.1 280.9c29.4-29.8 29.4-78.2 0-108s-77-29.8-106.4 0l-17.7 18-17.7-18c-29.4-29.8-77-29.8-106.4 0s-29.4 78.2 0 108z" />
    </Icon>
);

export default CircleHeart;