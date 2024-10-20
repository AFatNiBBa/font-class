
import { Icon } from "../../index";

/**
 * A component that renders the `square-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down?s=sharp-thin square-down}
 * @preview ![square-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-down.svg)
 */
const SquareDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 464L16 48l416 0 0 416L16 464zM0 480l16 0 416 0 16 0 0-16 0-416 0-16-16 0L16 32 0 32 0 48 0 464l0 16zM192 256l0-112 64 0 0 112 0 16 16 0 64 0 0 1.4-112 112-112-112 0-1.4 64 0 16 0 0-16zm20.7 140.7L224 408l11.3-11.3L352 280l0-8 0-16-16 0-48 0-16 0 0-16 0-96 0-16-16 0-64 0-16 0 0 16 0 96 0 16-16 0-48 0-16 0 0 16 0 8L212.7 396.7z" />
    </Icon>
);

export default SquareDown;