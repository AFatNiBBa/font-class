
import { Icon } from "../../index";

/**
 * A component that renders the `objects-column` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-column?s=sharp-solid objects-column}
 * @preview ![objects-column](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/objects-column.svg)
 */
const ObjectsColumn: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M192 32L0 32 0 288l192 0 0-256zM448 224l-192 0 0 256 192 0 0-256zM0 352L0 480l192 0 0-128L0 352zM448 32L256 32l0 128 192 0 0-128z" />
    </Icon>
);

export default ObjectsColumn;