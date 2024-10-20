
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-can-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-plus?s=sharp-duotone-solid trash-can-plus}
 * @preview ![trash-can-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/trash-can-plus.svg)
 */
const TrashCanPlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96l0 416 384 0 0-416L32 96zm80 168l24 0 64 0 0-64 0-24 48 0 0 24 0 64 64 0 24 0 0 48-24 0-64 0 0 64 0 24-48 0 0-24 0-64-64 0-24 0 0-48z" />
        <path d="M144 0L304 0l16 32 128 0 0 64L0 96 0 32l128 0L144 0zm56 400l0-24 0-64-64 0-24 0 0-48 24 0 64 0 0-64 0-24 48 0 0 24 0 64 64 0 24 0 0 48-24 0-64 0 0 64 0 24-48 0z" />
    </Icon>
);

export default TrashCanPlus;