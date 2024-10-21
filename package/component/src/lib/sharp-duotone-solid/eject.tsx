
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eject` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eject?s=sharp-duotone-solid eject}
 * @preview ![eject](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/eject.svg)
 */
const Eject: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 384l448 0 0 96L0 480l0-96z" />
        <path d="M0 272v48H448V272L224 32 0 272z" />
    </Icon>
);

export default Eject;