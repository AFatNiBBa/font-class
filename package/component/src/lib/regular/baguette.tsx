
import { Icon } from "../../index";

/**
 * A component that renders the `baguette` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/baguette?s=regular baguette}
 * @preview ![baguette](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/baguette.svg)
 */
const Baguette: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M578.6 83.6c-24.5-36.8-74.2-46.7-110.9-22.2l-69.7 46.5L433 143c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-41.9-41.9-74.5 49.6L321 223c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-45.1-45.1-74.5 49.6L209 303c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48.3-48.3L83.6 317.4c-36.8 24.5-46.7 74.2-22.2 110.9s74.2 46.7 110.9 22.2l384-256c36.8-24.5 46.7-74.2 22.2-110.9zM618.5 57c39.2 58.8 23.3 138.3-35.5 177.5l-384 256C140.2 529.7 60.7 513.8 21.5 455S-1.8 316.7 57 277.5l384-256C499.8-17.7 579.3-1.8 618.5 57z" />
    </Icon>
);

export default Baguette;