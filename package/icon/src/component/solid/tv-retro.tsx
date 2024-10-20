
import { Icon } from "../../index";

/**
 * A component that renders the `tv-retro` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tv-retro?s=solid tv-retro}
 * @preview ![tv-retro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/tv-retro.svg)
 */
const TvRetro: typeof Icon = x => (
    <Icon {...x}>
        <path d="M169 7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l55 55L80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l352 0c44.2 0 80-35.8 80-80l0-256c0-44.2-35.8-80-80-80L321.9 96l55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-87 87L169 7zM424 232a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM64 224c0-35.3 28.7-64 64-64l192 0c35.3 0 64 28.7 64 64l0 160c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-160z" />
    </Icon>
);

export default TvRetro;