
import { Icon } from "../../index";

/**
 * A component that renders the `grip-dots` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-dots?s=sharp-regular grip-dots}
 * @preview ![grip-dots](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/grip-dots.svg)
 */
const GripDots: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 192a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-160 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM64 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM224 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM32 320a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
    </Icon>
);

export default GripDots;