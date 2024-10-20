
import { Icon } from "../../index";

/**
 * A component that renders the `clapperboard-play` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard-play?s=sharp-regular clapperboard-play}
 * @preview ![clapperboard-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/clapperboard-play.svg)
 */
const ClapperboardPlay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 432l0-224 416 0 0 224L48 432zM336 160l80-80 48 0 0 16-64 64-64 0zm-96 0l-64 0 80-80 64 0-80 80zM80 160l-32 0 0-32L96 80l64 0L80 160zm432 24l0-24 0-80 0-48-48 0L48 32 0 32 0 80l0 80 0 24 0 24L0 432l0 48 48 0 416 0 48 0 0-48 0-224 0-24zM344 320L208 232l0 176 136-88z" />
    </Icon>
);

export default ClapperboardPlay;