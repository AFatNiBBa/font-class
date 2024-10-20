
import { Icon } from "../../index";

/**
 * A component that renders the `baguette` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/baguette?s=light baguette}
 * @preview ![baguette](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/baguette.svg)
 */
const Baguette: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M591.9 74.8c-29.4-44.1-89-56-133.1-26.6l-79.2 52.8 47.8 47.8c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L352.4 119l-88 58.7 51 51c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-55.5-55.5-88 58.7 54.2 54.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L122 272.6 74.7 304.1c-44.1 29.4-56 89-26.6 133.1s89 56 133.1 26.6l384-256c44.1-29.4 56-89 26.6-133.1zM618.5 57c39.2 58.8 23.3 138.3-35.5 177.5l-384 256C140.2 529.7 60.7 513.8 21.5 455S-1.8 316.7 57 277.5l384-256C499.8-17.7 579.3-1.8 618.5 57z" />
    </Icon>
);

export default Baguette;