
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-list` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-list?s=sharp-solid trash-can-list}
 * @preview ![trash-can-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/trash-can-list.svg)
 */
const TrashCanList: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M288 0L128 0 112 32 0 32 0 96l416 0 0-64L304 32 288 0zm96 128L32 128l0 384 352 0 0-384zM160 208l0 224 0 16-32 0 0-16 0-224 0-16 32 0 0 16zm128 0l0 224 0 16-32 0 0-16 0-224 0-16 32 0 0 16zm352-80l-192 0 0 64 192 0 0-64zM608 256l-160 0 0 64 160 0 0-64zM448 384l0 64 96 0 0-64-96 0z" />
    </Icon>
);

export default TrashCanList;