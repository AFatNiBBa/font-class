
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fill` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fill?s=duotone fill}
 * @preview ![fill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/fill.svg)
 */
const Fill: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M66.5 296c0 8.2 3.1 16.4 9.4 22.6L193.4 436.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4C288 386.7 337.4 337.4 386.7 288L67.5 288c-.7 2.6-1 5.3-1 8z" />
        <path d="M86.6 9.4C74.1-3.1 53.9-3.1 41.4 9.4s-12.5 32.8 0 45.3L122.7 136 30.6 228.1c-37.5 37.5-37.5 98.3 0 135.8L148.1 481.4c37.5 37.5 98.3 37.5 135.8 0L474.3 290.9c28.1-28.1 28.1-73.7 0-101.8L322.9 37.7c-28.1-28.1-73.7-28.1-101.8 0L168 90.7 86.6 9.4zM168 181.3l49.4 49.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L213.3 136l53.1-53.1c3.1-3.1 8.2-3.1 11.3 0L429.1 234.3c3.1 3.1 3.1 8.2 0 11.3L238.6 436.1c-12.5 12.5-32.8 12.5-45.3 0L75.9 318.6c-12.5-12.5-12.5-32.8 0-45.3L168 181.3z" />
    </Icon>
);

export default Fill;