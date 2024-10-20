
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-nested` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-nested?s=sharp-solid diagram-nested}
 * @preview ![diagram-nested](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/diagram-nested.svg)
 */
const DiagramNested: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l192 0 0 192-64 0 0 128 128 0 0-64 192 0 0 192-192 0 0-64L96 416l-32 0 0-32 0-160L0 224 0 32z" />
    </Icon>
);

export default DiagramNested;