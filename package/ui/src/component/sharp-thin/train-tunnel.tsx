
import { Icon } from "../../index";

/**
 * A component that renders the `train-tunnel` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-tunnel?s=sharp-thin train-tunnel}
 * @preview ![train-tunnel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/train-tunnel.svg)
 */
const TrainTunnel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16C123.5 16 16 123.5 16 256l0 248 0 8L0 512l0-8L0 256C0 114.6 114.6 0 256 0S512 114.6 512 256l0 248 0 8-16 0 0-8 0-248C496 123.5 388.5 16 256 16zM108.7 512s0 0 0 0l5.7-5.7L172.7 448 128 448l-16 0 0-16 0-288 0-16 16 0 256 0 16 0 0 16 0 288 0 16-16 0-44.7 0 58.3 58.3 5.7 5.7-22.6 0-64-64-121.4 0-64 64-22.6 0zM128 432l256 0 0-288-256 0 0 288zm48-240l160 0 16 0 0 16 0 96 0 16-16 0-160 0-16 0 0-16 0-96 0-16 16 0zm96 184a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm64-168l-160 0 0 96 160 0 0-96zM224 376a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default TrainTunnel;