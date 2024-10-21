
import { Icon } from "../../index";

/**
 * A component that renders the `grip-dots` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-dots?s=solid grip-dots}
 * @preview ![grip-dots](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/grip-dots.svg)
 */
const GripDots: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M336 176a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm-160 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM64 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM336 336a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM224 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM16 336a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
    </Icon>
);

export default GripDots;