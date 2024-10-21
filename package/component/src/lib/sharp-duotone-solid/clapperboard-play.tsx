
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clapperboard-play` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard-play?s=sharp-duotone-solid clapperboard-play}
 * @preview ![clapperboard-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clapperboard-play.svg)
 */
const ClapperboardPlay: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160l6.1 0 67.9 0 92.1 0 67.9 0 92.1 0 67.9 0L512 160l0 320L0 480 0 160zm208 72l0 176 136-88L208 232z" />
        <path d="M361.9 32l-1 1-127 127 92.1 0 1-1 127-127-92.1 0zM512 160l0-118.1L393.9 160 512 160zM294.1 32l-92.1 0-1 1L73.9 160l92.1 0 1-1 127-127zM0 32L0 160l6.1 0 1-1 127-127L0 32zM344 320L208 232l0 176 136-88z" />
    </Icon>
);

export default ClapperboardPlay;