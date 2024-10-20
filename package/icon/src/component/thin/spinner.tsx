
import { Icon } from "../../index";

/**
 * A component that renders the `spinner` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner?s=thin spinner}
 * @preview ![spinner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/spinner.svg)
 */
const Spinner: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 80a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 496a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM80 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM0 256a48 48 0 1 1 96 0A48 48 0 1 1 0 256zm464 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM131.5 380.5A32 32 0 1 0 86.3 425.7a32 32 0 1 0 45.3-45.3zM75 437a48 48 0 1 1 67.9-67.9A48 48 0 1 1 75 437zM86.3 131.5a32 32 0 1 0 45.3-45.3A32 32 0 1 0 86.3 131.5zM142.9 75A48 48 0 1 1 75 142.9 48 48 0 1 1 142.9 75zM425.7 425.7a32 32 0 1 0 -45.3-45.3 32 32 0 1 0 45.3 45.3zm-56.6-56.6A48 48 0 1 1 437 437a48 48 0 1 1 -67.9-67.9z" />
    </Icon>
);

export default Spinner;