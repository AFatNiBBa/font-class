
import { Icon } from "../../index";

/**
 * A component that renders the `chimney` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chimney?s=solid chimney}
 * @preview ![chimney](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chimney.svg)
 */
const Chimney: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 46.3 14.3 32 32 32l384 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L32 160c-17.7 0-32-14.3-32-32L0 64zM32 192l96 0 0 128-96 0 0-128zm384 0l0 128-256 0 0-128 256 0zM288 352l0 128L32 480l0-128 256 0zm128 0l0 128-96 0 0-128 96 0z" />
    </Icon>
);

export default Chimney;