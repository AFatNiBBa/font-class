
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-nested` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-nested?s=sharp-thin diagram-nested}
 * @preview ![diagram-nested](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/diagram-nested.svg)
 */
const DiagramNested: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M176 48l0 160L16 208 16 48l160 0zM16 32L0 32 0 48 0 208l0 16 16 0 72 0 0 160 0 8 8 0 160 0 0 72 0 16 16 0 160 0 16 0 0-16 0-160 0-16-16 0-160 0-16 0 0 16 0 72-152 0 0-152 72 0 16 0 0-16 0-160 0-16-16 0L16 32zM432 304l0 160-160 0 0-160 160 0z" />
    </Icon>
);

export default DiagramNested;