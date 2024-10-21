
import { Icon } from "../../index";

/**
 * A component that renders the `draw-square` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/draw-square?s=light draw-square}
 * @preview ![draw-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/draw-square.svg)
 */
const DrawSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96c29.8 0 54.9 20.4 62 48l196 0c7.1-27.6 32.2-48 62-48c35.3 0 64 28.7 64 64c0 29.8-20.4 54.9-48 62l0 196c27.6 7.1 48 32.2 48 62c0 35.3-28.7 64-64 64c-29.8 0-54.9-20.4-62-48l-196 0c-7.1 27.6-32.2 48-62 48c-35.3 0-64-28.7-64-64c0-29.8 20.4-54.9 48-62l0-196C20.4 150.9 0 125.8 0 96C0 60.7 28.7 32 64 32zm62 368l196 0c5.8-22.5 23.5-40.2 46-46l0-196c-22.5-5.8-40.2-23.5-46-46l-196 0c-5.8 22.5-23.5 40.2-46 46l0 196c22.5 5.8 40.2 23.5 46 46zM96 416a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm256 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32-288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default DrawSquare;