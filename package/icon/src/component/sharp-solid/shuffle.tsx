
import { Icon } from "../../index";

/**
 * A component that renders the `shuffle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuffle?s=sharp-solid shuffle}
 * @preview ![shuffle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shuffle.svg)
 */
const Shuffle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 128L416 32l-32 0 0 64-64 0-16 0-9.6 12.8L244 176l40 53.3L336 160l48 0 0 64 32 0 96-96zm0 256l-96-96-32 0 0 64-48 0L153.6 108.8 144 96l-16 0L32 96 0 96l0 64 32 0 80 0L294.4 403.2 304 416l16 0 64 0 0 64 32 0 96-96zM204 336l-40-53.3L112 352l-80 0L0 352l0 64 32 0 96 0 16 0 9.6-12.8L204 336z" />
    </Icon>
);

export default Shuffle;