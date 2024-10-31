
import { Icon } from "../../index";

/**
 * A component that renders the `headphones` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones?s=regular headphones}
 * @preview ![headphones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/headphones.svg)
 */
const Headphones: typeof Icon = x => (
    <Icon {...x}>
        <path d="M49.6 262C62.4 159.4 149.9 80 256 80s193.6 79.4 206.4 182c-9.4-3.9-19.6-6-30.4-6c-26.5 0-48 21.5-48 48l0 128c0 26.5 21.5 48 48 48c44.2 0 80-35.8 80-80l0-32 0-32 0-48C512 146.6 397.4 32 256 32S0 146.6 0 288l0 48 0 32 0 32c0 44.2 35.8 80 80 80c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48c-10.8 0-21 2.1-30.4 6zM48 336c0-17.7 14.3-32 32-32l0 128c-17.7 0-32-14.3-32-32l0-32 0-32zm416 0l0 32 0 32c0 17.7-14.3 32-32 32l0-128c17.7 0 32 14.3 32 32z" />
    </Icon>
);

export default Headphones;