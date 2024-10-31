
import { Icon } from "../../index";

/**
 * A component that renders the `comma` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comma?s=sharp-light comma}
 * @preview ![comma](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/comma.svg)
 */
const Comma: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M136 366.6L62.6 480l-9.7 0L75.8 320l60.2 0 0 46.6zM48 288L20.6 480 16 512l32.3 0L80 512l88-136 0-56 0-32-32 0-88 0z" />
    </Icon>
);

export default Comma;