
import { Icon } from "../../index";

/**
 * A component that renders the `chimney` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chimney?s=sharp-regular chimney}
 * @preview ![chimney](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chimney.svg)
 */
const Chimney: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 96 352 0 0-96L48 80zM0 32l48 0 352 0 48 0 0 48 0 96 0 48-32 0 0 136 0 104 0 24-48 0 0-24 0-80-80 0 0 80 0 24-48 0 0-24 0-80-56 0L80 384l0 80 0 24-48 0 0-24 0-104 0-136L0 224l0-48L0 80 0 32zM80 224l0 112 80 0 0-112-80 0zm128 0l0 112 56 0 104 0 0-112-160 0z" />
    </Icon>
);

export default Chimney;