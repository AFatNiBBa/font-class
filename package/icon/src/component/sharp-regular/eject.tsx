
import { Icon } from "../../index";

/**
 * A component that renders the `eject` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eject?s=sharp-regular eject}
 * @preview ![eject](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/eject.svg)
 */
const Eject: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 134.3L65.7 304l316.7 0L224 134.3zM0 304L191.2 99.2 224 64l32.8 35.2L448 304l0 48-48 0L48 352 0 352l0-48zm24 96l400 0 24 0 0 48-24 0L24 448 0 448l0-48 24 0z" />
    </Icon>
);

export default Eject;