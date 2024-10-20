
import { Icon } from "../../index";

/**
 * A component that renders the `window` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window?s=sharp-regular window}
 * @preview ![window](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/window.svg)
 */
const Window: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l512 0 0 128 0 48 0 16 0 208 0 48-48 0L48 480 0 480l0-48L0 224l0-16 0-48L0 32zM464 224L48 224l0 208 416 0 0-208zM128 96L64 96l0 64 64 0 0-64zm32 0l0 64 64 0 0-64-64 0zm160 0l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default Window;