
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-nested` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-nested?s=sharp-duotone-solid diagram-nested}
 * @preview ![diagram-nested](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/diagram-nested.svg)
 */
const DiagramNested: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 224l0 160 0 32 32 0 160 0 0-64-128 0 0-128-64 0z" />
        <path d="M192 32L0 32 0 224l192 0 0-192zM448 288l-192 0 0 192 192 0 0-192z" />
    </Icon>
);

export default DiagramNested;