
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spinner` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner?s=duotone spinner}
 * @preview ![spinner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/spinner.svg)
 */
const Spinner: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M60.9 403.1a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM208 464a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM369.1 75A48 48 0 1 0 437 142.9 48 48 0 1 0 369.1 75zm0 294.2A48 48 0 1 0 437 437a48 48 0 1 0 -67.9-67.9zM416 256a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM96 256A48 48 0 1 0 0 256a48 48 0 1 0 96 0zM75 142.9A48 48 0 1 0 142.9 75 48 48 0 1 0 75 142.9z" />
    </Icon>
);

export default Spinner;