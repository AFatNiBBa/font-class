
import { Icon } from "../../index";

/**
 * A component that renders the `spinner` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner?s=solid spinner}
 * @preview ![spinner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/spinner.svg)
 */
const Spinner: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
    </Icon>
);

export default Spinner;