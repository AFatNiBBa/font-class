
import { Icon } from "../../index";

/**
 * A component that renders the `ruble-sign` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruble-sign?s=light ruble-sign}
 * @preview ![ruble-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ruble-sign.svg)
 */
const RubleSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M104.7 32C82.2 32 64 50.2 64 72.7L64 288l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 64-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 208 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 384l0-64 144 0c79.5 0 144-64.5 144-144s-64.5-144-144-144L104.7 32zM96 288L96 72.7c0-4.8 3.9-8.7 8.7-8.7L240 64c61.9 0 112 50.1 112 112s-50.1 112-112 112L96 288z" />
    </Icon>
);

export default RubleSign;