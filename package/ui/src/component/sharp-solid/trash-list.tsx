
import { Icon } from "../../index";

/**
 * A component that renders the `trash-list` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-list?s=sharp-solid trash-list}
 * @preview ![trash-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/trash-list.svg)
 */
const TrashList: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M288 0l16 32 112 0 0 64L0 96 0 32l112 0L128 0 288 0zM32 128l352 0L360 512 56 512 32 128zm608 0l0 64-192 0 0-64 192 0zM608 256l0 64-160 0 0-64 160 0zM448 384l96 0 0 64-96 0 0-64z" />
    </Icon>
);

export default TrashList;