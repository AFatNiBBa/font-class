
import { Icon } from "../../index";

/**
 * A component that renders the `eraser` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eraser?s=sharp-regular eraser}
 * @preview ![eraser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/eraser.svg)
 */
const Eraser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 480l160 0s0 0 0 0l200 0 24 0 0-48-24 0-152 0L526.1 273.9 560 240l-33.9-33.9L369.9 49.9 336 16 302.1 49.9 49.9 302.1 16 336l33.9 33.9L160 480zm140.1-48l-4.1 0s0 0 0 0l-116.1 0-96-96L217.9 201.9 374.1 358.1 300.1 432z" />
    </Icon>
);

export default Eraser;