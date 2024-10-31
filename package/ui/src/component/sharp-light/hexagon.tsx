
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon?s=sharp-light hexagon}
 * @preview ![hexagon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hexagon.svg)
 */
const Hexagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M146.6 448l218.9 0L475.1 256 365.4 64 146.6 64 36.9 256 146.6 448zM0 256L128 32l256 0L512 256 384 480l-256 0L0 256z" />
    </Icon>
);

export default Hexagon;