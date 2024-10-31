
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-history` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-history?s=duotone rectangle-history}
 * @preview ![rectangle-history](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/rectangle-history.svg)
 */
const RectangleHistory: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 104c0 13.3 10.7 24 24 24l368 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L72 80c-13.3 0-24 10.7-24 24zM96 24c0 13.3 10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L120 0C106.7 0 96 10.7 96 24z" />
        <path d="M448 160c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64l384 0z" />
    </Icon>
);

export default RectangleHistory;