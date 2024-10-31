
import { Icon } from "../../index";

/**
 * A component that renders the `tv-retro` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tv-retro?s=sharp-solid tv-retro}
 * @preview ![tv-retro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tv-retro.svg)
 */
const TvRetro: typeof Icon = x => (
    <Icon {...x}>
        <path d="M185 23l-17-17L134.1 40l17 17 39 39L0 96 0 512l512 0 0-416L321.9 96l39-39 17-17L344 6.1 327 23l-71 71L185 23zM424 232a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM64 160l320 0 0 288L64 448l0-288z" />
    </Icon>
);

export default TvRetro;