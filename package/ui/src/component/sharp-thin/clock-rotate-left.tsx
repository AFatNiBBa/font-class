
import { Icon } from "../../index";

/**
 * A component that renders the `clock-rotate-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-rotate-left?s=sharp-thin clock-rotate-left}
 * @preview ![clock-rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clock-rotate-left.svg)
 */
const ClockRotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 166.7L16 56l0-8L0 48l0 8L0 184l0 8 8 0 128 0 8 0 0-16-8 0L29.7 176C62.6 82.8 151.5 16 256 16c132.5 0 240 107.5 240 240s-107.5 240-240 240c-73.5 0-139.3-33.1-183.4-85.2l-5.2-6.1L55.2 415.1l5.2 6.1C107.3 476.7 177.6 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C146 0 52.2 69.4 16 166.7zM264 128l-16 0 0 8 0 120 0 3.3 2.3 2.3 88 88 5.7 5.7L355.3 344l-5.7-5.7L264 252.7 264 136l0-8z" />
    </Icon>
);

export default ClockRotateLeft;