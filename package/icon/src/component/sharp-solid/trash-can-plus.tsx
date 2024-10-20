
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-plus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-plus?s=sharp-solid trash-can-plus}
 * @preview ![trash-can-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/trash-can-plus.svg)
 */
const TrashCanPlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 0l16 32 128 0 0 64L0 96 0 32l128 0L144 0 304 0zM32 128l384 0 0 384L32 512l0-384zm168 72l0 80-80 0 0 48 80 0 0 80 48 0 0-80 80 0 0-48-80 0 0-80-48 0z" />
    </Icon>
);

export default TrashCanPlus;