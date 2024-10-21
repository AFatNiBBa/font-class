
import { Icon } from "../../index";

/**
 * A component that renders the `mandolin` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mandolin?s=sharp-solid mandolin}
 * @preview ![mandolin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mandolin.svg)
 */
const Mandolin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 0L368 48l-25.4 76.1-65.7 65.7C189.6 188.3 0 200.5 0 336c0 97.2 78.8 176 176 176c135.5 0 147.7-189.6 146.2-276.9l65.7-65.7L464 144l48-80L448 0zM208 256a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default Mandolin;