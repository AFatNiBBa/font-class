
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-rss` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-rss?s=sharp-duotone-solid square-rss}
 * @preview ![square-rss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-rss.svg)
 */
const SquareRss: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm96 16l0 48c123.7 0 224 100.3 224 224l48 0c0-150.2-121.8-272-272-272zm0 96l0 48c70.7 0 128 57.3 128 128l48 0c0-97.2-78.8-176-176-176zm0 144a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M368 384c0-150.2-121.8-272-272-272l0 48c123.7 0 224 100.3 224 224l48 0zm-96 0c0-97.2-78.8-176-176-176l0 48c70.7 0 128 57.3 128 128l48 0zm-144 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default SquareRss;