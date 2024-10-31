
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-heart` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-heart?s=duotone square-heart}
 * @preview ![square-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-heart.svg)
 */
const SquareHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM77.8 226.9c0-19.5 7.3-39.1 22-54s33.9-22.4 53.2-22.4s38.5 7.5 53.2 22.4c5.9 6 11.8 12 17.7 18c5.9-6 11.8-12 17.7-18c14.7-14.9 33.9-22.4 53.2-22.4s38.5 7.5 53.2 22.4s22 34.5 22 54s-7.3 39.1-22 54L246.5 384.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L99.9 280.9c-14.7-14.9-22-34.5-22-54z" />
        <path d="M99.9 172.9c-29.4 29.8-29.4 78.2 0 108L201.5 384.1c6.2 6.3 14.3 9.4 22.5 9.4s16.3-3.1 22.5-9.4L348.1 280.9c29.4-29.8 29.4-78.2 0-108s-77-29.8-106.4 0l-17.7 18-17.7-18c-29.4-29.8-77-29.8-106.4 0z" />
    </Icon>
);

export default SquareHeart;