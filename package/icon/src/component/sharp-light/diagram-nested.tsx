
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-nested` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-nested?s=sharp-light diagram-nested}
 * @preview ![diagram-nested](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/diagram-nested.svg)
 */
const DiagramNested: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 64l0 128-48 0-32 0-48 0L32 64l128 0zM112 224l48 0 32 0 0-32 0-128 0-32-32 0L32 32 0 32 0 64 0 192l0 32 32 0 48 0 0 160 0 16 16 0 160 0 0 48 0 32 32 0 128 0 32 0 0-32 0-128 0-32-32 0-128 0-32 0 0 32 0 48-144 0 0-144zM288 368l0-48 128 0 0 128-128 0 0-48 0-32z" />
    </Icon>
);

export default DiagramNested;