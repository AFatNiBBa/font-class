
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ranking-star` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ranking-star?s=sharp-duotone-solid ranking-star}
 * @preview ![ranking-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ranking-star.svg)
 */
const RankingStar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 320l192 0 0 192L0 512 0 320zm224-64l192 0 0 256-192 0 0-256zM448 384l192 0 0 128-192 0 0-128z" />
        <path d="M320 0l31.8 62.3 69 11-49.4 49.5L382.3 192 320 160.3 257.7 192l10.9-69.1L219.2 73.3l69-11L320 0z" />
    </Icon>
);

export default RankingStar;