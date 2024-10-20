
import { Icon } from "../../index";

/**
 * A component that renders the `pencil` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pencil?s=sharp-solid pencil}
 * @preview ![pencil](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pencil.svg)
 */
const Pencil: typeof Icon = x => (
    <Icon {...x}>
        <path d="M10.2 461L0 512l51-10.2L160 480 420.7 219.3l-16-16-96-96-16-16L32 352 10.2 461zM315.3 68.7l16 16 96 96 16 16 34.7-34.7L512 128 478.1 94.1 417.9 33.9 384 0 350.1 33.9 315.3 68.7zM99.9 352l12.1 0 0 48 48 0 0 12.1-23.7 23.7-75.1 15 15-75.1L99.9 352zM326.6 176l-11.3 11.3-144 144L160 342.6 137.4 320l11.3-11.3 144-144L304 153.4 326.6 176z" />
    </Icon>
);

export default Pencil;