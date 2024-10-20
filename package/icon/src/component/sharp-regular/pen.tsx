
import { Icon } from "../../index";

/**
 * A component that renders the `pen` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen?s=sharp-regular pen}
 * @preview ![pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pen.svg)
 */
const Pen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 512l10.2-51L32 352 350.1 33.9 384 0l33.9 33.9 60.1 60.1L512 128l-33.9 33.9L160 480 51 501.8 0 512zm136.3-76.2L382.1 190.1l-60.1-60.1L76.2 375.7l-15 75.1 75.1-15z" />
    </Icon>
);

export default Pen;