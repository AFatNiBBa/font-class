
import { Icon, generic } from "../../index";

/**
 * A component that renders the `golf-club` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/golf-club?s=sharp-duotone-solid golf-club}
 * @preview ![golf-club](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/golf-club.svg)
 */
const GolfClub: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 304l0 72 48 0 16 0 0 32-16 0L0 408l0 32 48 0 16 0 0 32-16 0L0 472l0 40 224 0 32 0 19.8 0 8.8-17.7 224-448L451.4 17.7 264 392.5l0-.5L0 304z" />
        <path d="M0 408l0-32 48 0 16 0 0 32-16 0L0 408zm0 64l0-32 48 0 16 0 0 32-16 0L0 472z" />
    </Icon>
);

export default GolfClub;