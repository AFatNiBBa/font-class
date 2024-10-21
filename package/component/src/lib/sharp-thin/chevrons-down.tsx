
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-down?s=sharp-thin chevrons-down}
 * @preview ![chevrons-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chevrons-down.svg)
 */
const ChevronsDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M250.3 269.7l5.7 5.7 5.7-5.7 208-208 5.7-5.7L464 44.7l-5.7 5.7L256 252.7 53.7 50.3 48 44.7 36.7 56l5.7 5.7 208 208zm0 192l5.7 5.7 5.7-5.7 208-208 5.7-5.7L464 236.7l-5.7 5.7L256 444.7 53.7 242.3 48 236.7 36.7 248l5.7 5.7 208 208z" />
    </Icon>
);

export default ChevronsDown;