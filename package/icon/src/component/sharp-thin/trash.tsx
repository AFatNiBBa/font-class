
import { Icon } from "../../index";

/**
 * A component that renders the `trash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash?s=sharp-thin trash}
 * @preview ![trash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/trash.svg)
 */
const Trash: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M155.6 0L160 0 288 0l4.4 0 2.4 3.8L332.4 64 448 64l0 16L0 80 0 64l115.6 0L153.2 3.8 155.6 0zm128 16L164.4 16l-30 48 179.1 0-30-48zM24 112.8L24 112 40 112 79.2 496l289.5 0L408 112l16.1 0-.1 .8-40 392-.7 7.2-7.2 0L72 512l-7.2 0-.7-7.2-40-392z" />
    </Icon>
);

export default Trash;