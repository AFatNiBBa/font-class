
import { Icon } from "../../index";

/**
 * A component that renders the `ranking-star` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ranking-star?s=sharp-solid ranking-star}
 * @preview ![ranking-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ranking-star.svg)
 */
const RankingStar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M351.8 62.3L320 0 288.2 62.3l-69 11 49.4 49.5L257.7 192 320 160.3 382.3 192l-10.9-69.1 49.4-49.5-69-11zM416 256l-192 0 0 256 192 0 0-256zM192 320L0 320 0 512l192 0 0-192zm256 64l0 128 192 0 0-128-192 0z" />
    </Icon>
);

export default RankingStar;