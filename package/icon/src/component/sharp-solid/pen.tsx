
import { Icon } from "../../index";

/**
 * A component that renders the `pen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen?s=sharp-solid pen}
 * @preview ![pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pen.svg)
 */
const Pen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 512L32 352 292.7 91.3l128 128L160 480 0 512zM443.3 196.7l-128-128L384 0 512 128l-68.7 68.7z" />
    </Icon>
);

export default Pen;