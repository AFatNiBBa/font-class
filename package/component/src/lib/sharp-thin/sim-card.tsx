
import { Icon } from "../../index";

/**
 * A component that renders the `sim-card` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-card?s=sharp-thin sim-card}
 * @preview ![sim-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sim-card.svg)
 */
const SimCard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 16l0 480 352 0 0-361.4L249.4 16 16 16zM256 0L384 128l0 368 0 16-16 0L16 512 0 512l0-16L0 16 0 0 16 0 256 0zM80 288l0 64 72 0 80 0 72 0 0-64-72 0-80 0-72 0zm160 80l0 64 64 0 0-64-64 0zm80 80l-16 0-64 0-8 0-8 0-64 0-8 0-8 0-64 0-16 0 0-16 0-224 0-16 16 0 64 0 8 0 8 0 64 0 8 0 8 0 64 0 16 0 0 16 0 224 0 16zM240 208l0 64 64 0 0-64-64 0zm-80 0l0 64 64 0 0-64-64 0zm-16 0l-64 0 0 64 64 0 0-64zm0 224l0-64-64 0 0 64 64 0zm16 0l64 0 0-64-64 0 0 64z" />
    </Icon>
);

export default SimCard;