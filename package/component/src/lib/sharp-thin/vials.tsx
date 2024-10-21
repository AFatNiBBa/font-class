
import { Icon } from "../../index";

/**
 * A component that renders the `vials` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vials?s=sharp-thin vials}
 * @preview ![vials](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/vials.svg)
 */
const Vials: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 32L8 32 8 48l8 0 16 0 0 216 0 136c0 44.2 35.8 80 80 80s80-35.8 80-80l0-136 0-216 16 0 8 0 0-16-8 0-24 0L40 32 16 32zM48 256L48 48l128 0 0 208L48 256zm0 16l128 0 0 128c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-128zM304 32l-8 0 0 16 8 0 16 0 0 216 0 136c0 44.2 35.8 80 80 80s80-35.8 80-80l0-136 0-216 16 0 8 0 0-16-8 0-24 0L328 32l-24 0zm32 224l0-208 128 0 0 208-128 0zm0 16l128 0 0 128c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-128z" />
    </Icon>
);

export default Vials;