
import { Icon } from "../../index";

/**
 * A component that renders the `dreidel` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dreidel?s=sharp-light dreidel}
 * @preview ![dreidel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/dreidel.svg)
 */
const Dreidel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M443.4 59.2L432.1 70.5 321.9 180.7l84.7 84.7L429.3 288l-22.6 22.6-160 160-9.4 9.4L224 480 32 480 0 480l0-32L0 256l0-13.3 9.4-9.4 160-160L192 50.7l22.6 22.6 84.7 84.7L409.5 47.9l11.3-11.3 22.6 22.6zM292.7 379.3l-192-192L32 256l0 192 192 0 68.7-68.7zm22.6-22.6L384 288 192 96l-68.7 68.7 192 192z" />
    </Icon>
);

export default Dreidel;