
import { Icon } from "../../index";

/**
 * A component that renders the `vials` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vials?s=sharp-regular vials}
 * @preview ![vials](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/vials.svg)
 */
const Vials: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l24 0 32 0 112 0 32 0 24 0 0 48-24 0-8 0 0 320c0 44.2-35.8 80-80 80s-80-35.8-80-80L32 80l-8 0L0 80 0 32zM80 80l0 176 64 0 0-176L80 80zM288 32l24 0 32 0 112 0 32 0 24 0 0 48-24 0-8 0 0 320c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-320-8 0-24 0 0-48zm80 48l0 176 64 0 0-176-64 0z" />
    </Icon>
);

export default Vials;