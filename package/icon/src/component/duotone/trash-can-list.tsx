
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-can-list` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-list?s=duotone trash-can-list}
 * @preview ![trash-can-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/trash-can-list.svg)
 */
const TrashCanList: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 96l0 368c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-368L32 96zm96 96c0-8.8 7.2-16 16-16s16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224zm128 0c0-8.8 7.2-16 16-16s16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224z" />
        <path d="M119.2 17.7C124.6 6.8 135.7 0 147.8 0L268.2 0c12.1 0 23.2 6.8 28.6 17.7L304 32l80 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l80 0 7.2-14.3zM480 128l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zM448 416c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default TrashCanList;