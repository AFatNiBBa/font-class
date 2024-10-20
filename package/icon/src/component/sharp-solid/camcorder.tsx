
import { Icon } from "../../index";

/**
 * A component that renders the `camcorder` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camcorder?s=sharp-solid camcorder}
 * @preview ![camcorder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/camcorder.svg)
 */
const Camcorder: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 32l32 0 224 0 32 0 0 64-32 0L96 96l0 64 288 0 0 320L0 480 0 160l32 0 0-96 0-32zM576 160l0 320L416 400l0-160 160-80zM80 224l-16 0 0 32 16 0 224 0 16 0 0-32-16 0L80 224z" />
    </Icon>
);

export default Camcorder;