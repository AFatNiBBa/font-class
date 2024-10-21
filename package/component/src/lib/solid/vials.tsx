
import { Icon } from "../../index";

/**
 * A component that renders the `vials` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vials?s=solid vials}
 * @preview ![vials](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/vials.svg)
 */
const Vials: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64C0 46.3 14.3 32 32 32l56 0 48 0 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 304c0 44.2-35.8 80-80 80s-80-35.8-80-80L32 96C14.3 96 0 81.7 0 64zM136 96L88 96l0 160 48 0 0-160zM288 64c0-17.7 14.3-32 32-32l56 0 48 0 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 304c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-304c-17.7 0-32-14.3-32-32zM424 96l-48 0 0 160 48 0 0-160z" />
    </Icon>
);

export default Vials;