
import { Icon, generic } from "../../index";

/**
 * A component that renders the `elevator` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/elevator?s=sharp-duotone-solid elevator}
 * @preview ![elevator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/elevator.svg)
 */
const Elevator: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128L0 512l512 0 0-384L0 128zM80 448l24-96 112 0 24 96L80 448zM208 272a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm64 176l24-96 112 0 24 96-160 0zM400 272a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
        <path d="M64 80L144 0l80 80 0 16L64 96l0-16zM288 16l0-16L448 0l0 16L368 96 288 16zM160 224a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM80 448l24-96 112 0 24 96L80 448zm328-96l24 96-160 0 24-96 112 0zM304 272a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default Elevator;