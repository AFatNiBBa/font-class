
import { Icon } from "../../index";

/**
 * A component that renders the `list-timeline` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-timeline?s=sharp-solid list-timeline}
 * @preview ![list-timeline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/list-timeline.svg)
 */
const ListTimeline: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 96a48 48 0 1 1 96 0A48 48 0 1 1 16 96zM64 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 160a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM208 48l240 0 0 96-240 0L144 96l64-48zM144 256l64-48 304 0 0 96-304 0-64-48zm0 160l64-48 240 0 0 96-240 0-64-48z" />
    </Icon>
);

export default ListTimeline;