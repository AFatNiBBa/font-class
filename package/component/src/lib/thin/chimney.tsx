
import { Icon } from "../../index";

/**
 * A component that renders the `chimney` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chimney?s=thin chimney}
 * @preview ![chimney](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chimney.svg)
 */
const Chimney: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 48c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16L32 48zM0 64C0 46.3 14.3 32 32 32l384 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 104 0 112 0 96c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-88-120 0-104 0 0 88c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-88L48 384l0 88c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-96 0-112 0-104c-17.7 0-32-14.3-32-32L0 64zm48 96l0 96 112 0 0-96L48 160zm128 0l0 96 104 0 120 0 0-96-224 0zm-8 208l104 0 0-96-104 0L48 272l0 96 120 0zm120 0l112 0 0-96-112 0 0 96z" />
    </Icon>
);

export default Chimney;