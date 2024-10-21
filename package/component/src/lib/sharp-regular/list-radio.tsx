
import { Icon } from "../../index";

/**
 * A component that renders the `list-radio` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-radio?s=sharp-regular list-radio}
 * @preview ![list-radio](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/list-radio.svg)
 */
const ListRadio: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32a64 64 0 1 0 0 128A64 64 0 1 0 64 32zM184 72l-24 0 0 48 24 0 304 0 24 0 0-48-24 0L184 72zm0 160l-24 0 0 48 24 0 304 0 24 0 0-48-24 0-304 0zm0 160l-24 0 0 48 24 0 304 0 24 0 0-48-24 0-304 0zM64 280a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm0-88a64 64 0 1 0 0 128 64 64 0 1 0 0-128zM40 416a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0A64 64 0 1 0 0 416a64 64 0 1 0 128 0z" />
    </Icon>
);

export default ListRadio;