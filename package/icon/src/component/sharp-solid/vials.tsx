
import { Icon } from "../../index";

/**
 * A component that renders the `vials` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vials?s=sharp-solid vials}
 * @preview ![vials](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/vials.svg)
 */
const Vials: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l32 0 56 0 48 0 56 0 32 0 0 64-32 0 0 304c0 44.2-35.8 80-80 80s-80-35.8-80-80L32 96 0 96 0 32zM136 96L88 96l0 160 48 0 0-160zM288 32l32 0 56 0 48 0 56 0 32 0 0 64-32 0 0 304c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-304-32 0 0-64zM424 96l-48 0 0 160 48 0 0-160z" />
    </Icon>
);

export default Vials;