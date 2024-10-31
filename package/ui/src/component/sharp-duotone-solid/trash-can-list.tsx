
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-can-list` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-list?s=sharp-duotone-solid trash-can-list}
 * @preview ![trash-can-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/trash-can-list.svg)
 */
const TrashCanList: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 96l0 416 352 0 0-416L32 96zm96 80l32 0 0 16 0 224 0 16-32 0 0-16 0-224 0-16zm128 0l32 0 0 16 0 224 0 16-32 0 0-16 0-224 0-16z" />
        <path d="M128 0L288 0l16 32 112 0 0 64L0 96 0 32l112 0L128 0zM640 128l0 64-192 0 0-64 192 0zM608 256l0 64-160 0 0-64 160 0zM448 384l96 0 0 64-96 0 0-64z" />
    </Icon>
);

export default TrashCanList;