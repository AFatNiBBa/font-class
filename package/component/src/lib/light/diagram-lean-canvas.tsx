
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-lean-canvas` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-lean-canvas?s=light diagram-lean-canvas}
 * @preview ![diagram-lean-canvas](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/diagram-lean-canvas.svg)
 */
const DiagramLeanCanvas: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 64l0 256 96 0 0-224c0-17.7-14.3-32-32-32l-64 0zm-32 0l-96 0 0 128 96 0 0-128zM352 64l-64 0 0 256 64 0 0-256zm-96 0l-96 0 0 128 96 0 0-128zM128 64L64 64C46.3 64 32 78.3 32 96l0 224 96 0 0-256zM32 352l0 64c0 17.7 14.3 32 32 32l240 0 0-96L32 352zm304 96l240 0c17.7 0 32-14.3 32-32l0-64-272 0 0 96zM0 96C0 60.7 28.7 32 64 32l512 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM256 320l0-96-96 0 0 96 96 0zm224-96l-96 0 0 96 96 0 0-96z" />
    </Icon>
);

export default DiagramLeanCanvas;