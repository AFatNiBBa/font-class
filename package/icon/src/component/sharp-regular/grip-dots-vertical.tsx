
import { Icon } from "../../index";

/**
 * A component that renders the `grip-dots-vertical` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-dots-vertical?s=sharp-regular grip-dots-vertical}
 * @preview ![grip-dots-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/grip-dots-vertical.svg)
 */
const GripDotsVertical: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M64 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM96 416a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96-288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 128a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM192 448a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default GripDotsVertical;