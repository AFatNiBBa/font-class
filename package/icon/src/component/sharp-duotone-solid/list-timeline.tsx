
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list-timeline` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-timeline?s=sharp-duotone-solid list-timeline}
 * @preview ![list-timeline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/list-timeline.svg)
 */
const ListTimeline: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M144 96l64 48 240 0 0-96L208 48 144 96zm0 160l64 48 304 0 0-96-304 0-64 48zm0 160l64 48 240 0 0-96-240 0-64 48z" />
        <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 112a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default ListTimeline;