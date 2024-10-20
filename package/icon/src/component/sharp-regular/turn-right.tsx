
import { Icon } from "../../index";

/**
 * A component that renders the `turn-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-right?s=sharp-regular turn-right}
 * @preview ![turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/turn-right.svg)
 */
const TurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 248l-48 0-160 0-48 0 0 48 0 136-48 0 0-232 256 0 48 0 0-48 0-20.1L444.1 224 352 316.1l0-20.1 0-48zm126.1 9.9L512 224l-33.9-33.9L352 64l-48 0 0 40 0 8 0 40-48 0L48 152 0 152l0 48L0 432l0 48 48 0 48 0 48 0 0-48 0-88 0-48 48 0 64 0 48 0 0 40 0 8 0 40 48 0L478.1 257.9z" />
    </Icon>
);

export default TurnRight;