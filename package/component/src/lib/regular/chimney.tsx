
import { Icon } from "../../index";

/**
 * A component that renders the `chimney` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chimney?s=regular chimney}
 * @preview ![chimney](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chimney.svg)
 */
const Chimney: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 176l352 0 0-96L48 80l0 96zM0 64C0 46.3 14.3 32 32 32l384 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l0 136 0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80-80 0 0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80-56 0L80 384l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104 0-136c-17.7 0-32-14.3-32-32L0 64zM80 224l0 112 80 0 0-112-80 0zm128 0l0 112 56 0 104 0 0-112-160 0z" />
    </Icon>
);

export default Chimney;