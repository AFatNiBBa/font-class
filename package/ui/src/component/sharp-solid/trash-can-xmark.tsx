
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-xmark?s=sharp-solid trash-can-xmark}
 * @preview ![trash-can-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/trash-can-xmark.svg)
 */
const TrashCanXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 0l16 32 128 0 0 64L0 96 0 32l128 0L144 0 304 0zM32 128l384 0 0 384L32 512l0-384zM321.9 256L288 222.1l-17 17-47 47-47-47-17-17L126.1 256l17 17 47 47-47 47-17 17L160 417.9l17-17 47-47 47 47 17 17L321.9 384l-17-17-47-47 47-47 17-17z" />
    </Icon>
);

export default TrashCanXmark;