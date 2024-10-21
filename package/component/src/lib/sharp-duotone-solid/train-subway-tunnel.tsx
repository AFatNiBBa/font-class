
import { Icon, generic } from "../../index";

/**
 * A component that renders the `train-subway-tunnel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-subway-tunnel?s=sharp-duotone-solid train-subway-tunnel}
 * @preview ![train-subway-tunnel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/train-subway-tunnel.svg)
 */
const TrainSubwayTunnel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L0 512l105.4 0 64-64L112 448l0-320 288 0 0 320-57.4 0 64 64L512 512l0-256C512 114.6 397.4 0 256 0S0 114.6 0 256zM150.6 512l210.7 0-64-64-82.7 0-64 64zM160 192l0 128 80 0 0-128-80 0zm112 0l0 128 80 0 0-128-80 0z" />
        <path d="M112 128l288 0 0 320-288 0 0-320zm48 64l0 128 80 0 0-128-80 0zm112 0l0 128 80 0 0-128-80 0zM184 400a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm168-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default TrainSubwayTunnel;