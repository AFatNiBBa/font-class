
import { Icon, generic } from "../../index";

/**
 * A component that renders the `airplay` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/airplay?s=sharp-duotone-solid airplay}
 * @preview ![airplay](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/airplay.svg)
 */
const Airplay: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96 0 352l0 64 64 0 33.9 0 8.7-7.8L169 352 64 352 64 96l448 0 0 256-105 0 62.5 56.2 8.7 7.8 33.9 0 64 0 0-64 0-256 0-64-64 0L64 32 0 32z" />
        <path d="M128 432L288 288 448 432v48H128V432z" />
    </Icon>
);

export default Airplay;