
import { Icon } from "../../index";

/**
 * A component that renders the `computer` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer?s=sharp-regular computer}
 * @preview ![computer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/computer.svg)
 */
const Computer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M400 80l0 256-118.7 0L264 336l-80 0-17.3 0L48 336 48 80l352 0zM48 384l102.7 0-16 48L64 432l0 48 54.7 0 33.3 0 144 0 33.3 0 54.7 0 0-48-70.7 0-16-48L400 384l48 0 0-48 0-256 0-48-48 0L48 32 0 32 0 80 0 336l0 48 48 0zm137.3 48l16-48 45.4 0 16 48-77.4 0zM528 80l64 0 0 32-64 0 0-32zm0 80l64 0 0 32-64 0 0-32zm64 80l0 192-64 0 0-192 64 0zM480 32l0 48 0 352 0 48 48 0 64 0 48 0 0-48 0-352 0-48-48 0-64 0-48 0zm80 328a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Computer;