
import { Icon } from "../../index";

/**
 * A component that renders the `camcorder` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camcorder?s=sharp-regular camcorder}
 * @preview ![camcorder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/camcorder.svg)
 */
const Camcorder: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M72 32L48 32l0 24 0 104L0 160l0 48L0 432l0 48 48 0 288 0 48 0 0-48 0-33.5 0-157 0-33.5 0-48-48 0L96 160l0-80 200 0 24 0 0-48-24 0L72 32zM48 208l288 0 0 224L48 432l0-224zM528 459.7L576 480l0-52.1 0-215.8 0-52.1-48 20.3L416 227.7l0 52.1 112-47.4 0 175.1L416 360.2l0 52.1 112 47.4zM80 240l0 48 24 0 176 0 24 0 0-48-24 0-176 0-24 0z" />
    </Icon>
);

export default Camcorder;