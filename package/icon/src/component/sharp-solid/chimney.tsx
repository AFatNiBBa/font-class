
import { Icon } from "../../index";

/**
 * A component that renders the `chimney` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chimney?s=sharp-solid chimney}
 * @preview ![chimney](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chimney.svg)
 */
const Chimney: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 128L0 160 0 32zM32 192l96 0 0 128-96 0 0-128zm384 0l0 128-256 0 0-128 256 0zM288 352l0 128L32 480l0-128 256 0zm128 0l0 128-96 0 0-128 96 0z" />
    </Icon>
);

export default Chimney;