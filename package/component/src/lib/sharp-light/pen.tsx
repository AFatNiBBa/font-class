
import { Icon } from "../../index";

/**
 * A component that renders the `pen` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen?s=sharp-light pen}
 * @preview ![pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pen.svg)
 */
const Pen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 512l6.8-34L32 352 361.4 22.6 384 0l22.6 22.6 82.7 82.7L512 128l-22.6 22.6L160 480 34 505.2 0 512zm144.2-61.5L398.1 196.7l-82.7-82.7L61.5 367.8 40.8 471.2l103.4-20.7zM420.7 174.1L466.7 128 384 45.3 337.9 91.3l82.7 82.7z" />
    </Icon>
);

export default Pen;