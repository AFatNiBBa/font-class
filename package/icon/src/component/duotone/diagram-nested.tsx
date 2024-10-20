
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-nested` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-nested?s=duotone diagram-nested}
 * @preview ![diagram-nested](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/diagram-nested.svg)
 */
const DiagramNested: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 224l0 96c0 53 43 96 96 96l96 0 0-64-96 0c-17.7 0-32-14.3-32-32l0-96-64 0z" />
        <path d="M48 32C21.5 32 0 53.5 0 80l0 96c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L48 32zM304 288c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-96 0z" />
    </Icon>
);

export default DiagramNested;