
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-project` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-project?s=sharp-solid diagram-project}
 * @preview ![diagram-project](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/diagram-project.svg)
 */
const DiagramProject: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 32l192 0 0 64 192 0 0-64 192 0 0 192-192 0 0-64-192 0 0 21.3L272 288l144 0 0 192-192 0 0-149.3L144 224 0 224 0 32z" />
    </Icon>
);

export default DiagramProject;