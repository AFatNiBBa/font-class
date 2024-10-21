
import { Icon } from "../../index";

/**
 * A component that renders the `eject` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eject?s=sharp-solid eject}
 * @preview ![eject](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/eject.svg)
 */
const Eject: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 320l0-48L224 32 448 272l0 48L0 320zM448 480L0 480l0-96 448 0 0 96z" />
    </Icon>
);

export default Eject;