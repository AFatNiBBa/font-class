
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-lean-canvas` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-lean-canvas?s=sharp-thin diagram-lean-canvas}
 * @preview ![diagram-lean-canvas](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/diagram-lean-canvas.svg)
 */
const DiagramLeanCanvas: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 48l0 288 112 0 0-288L512 48zm-16 0L384 48l0 144 112 0 0-144zM368 48l-96 0 0 288 96 0 0-288zM256 48L144 48l0 144 112 0 0-144zM128 48L16 48l0 288 112 0 0-288zM16 352l0 112 296 0 0-112L16 352zM328 464l296 0 0-112-296 0 0 112zM0 32l16 0 608 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM256 336l0-128-112 0 0 128 112 0zM496 208l-112 0 0 128 112 0 0-128z" />
    </Icon>
);

export default DiagramLeanCanvas;