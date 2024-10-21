
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-nested` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-nested?s=sharp-regular diagram-nested}
 * @preview ![diagram-nested](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/diagram-nested.svg)
 */
const DiagramNested: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 80l0 96-96 0 0-96 96 0zM48 32L0 32 0 80l0 96 0 48 48 0 24 0 0 160 0 24 24 0 160 0 0 24 0 48 48 0 96 0 48 0 0-48 0-96 0-48-48 0-96 0-48 0 0 48 0 24-136 0 0-136 24 0 48 0 0-48 0-96 0-48-48 0L48 32zM400 336l0 96-96 0 0-96 96 0z" />
    </Icon>
);

export default DiagramNested;