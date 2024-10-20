
import { Icon } from "../../index";

/**
 * A component that renders the `vials` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vials?s=regular vials}
 * @preview ![vials](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/vials.svg)
 */
const Vials: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 56C0 42.7 10.7 32 24 32l32 0 112 0 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 320c0 44.2-35.8 80-80 80s-80-35.8-80-80L32 80l-8 0C10.7 80 0 69.3 0 56zM80 80l0 176 64 0 0-176L80 80zM288 56c0-13.3 10.7-24 24-24l32 0 112 0 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 320c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-320-8 0c-13.3 0-24-10.7-24-24zm80 24l0 176 64 0 0-176-64 0z" />
    </Icon>
);

export default Vials;