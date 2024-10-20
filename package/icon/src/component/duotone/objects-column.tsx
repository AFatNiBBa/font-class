
import { Icon, generic } from "../../index";

/**
 * A component that renders the `objects-column` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-column?s=duotone objects-column}
 * @preview ![objects-column](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/objects-column.svg)
 */
const ObjectsColumn: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M256 80l0 32c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-32c0-26.5-21.5-48-48-48l-96 0c-26.5 0-48 21.5-48 48zm0 192l0 160c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48l-96 0c-26.5 0-48 21.5-48 48z" />
        <path d="M48 32C21.5 32 0 53.5 0 80L0 240c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48L48 32zm0 320c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-32c0-26.5-21.5-48-48-48l-96 0z" />
    </Icon>
);

export default ObjectsColumn;