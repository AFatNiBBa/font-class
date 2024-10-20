
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-project` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-project?s=sharp-thin diagram-project}
 * @preview ![diagram-project](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/diagram-project.svg)
 */
const DiagramProject: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M176 48l0 160L16 208 16 48l160 0zM16 32L0 32 0 48 0 208l0 16 16 0 160 0 3.5 0L224 298.2l0 5.8 0 160 0 16 16 0 160 0 16 0 0-16 0-160 0-16-16 0-160 0-3.5 0L192 213.8l0-5.8 0-72 192 0 0 72 0 16 16 0 160 0 16 0 0-16 0-160 0-16-16 0L400 32l-16 0 0 16 0 72-192 0 0-72 0-16-16 0L16 32zM400 304l0 160-160 0 0-160 160 0zm0-256l160 0 0 160-160 0 0-160z" />
    </Icon>
);

export default DiagramProject;