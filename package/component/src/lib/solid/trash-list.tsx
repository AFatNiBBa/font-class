
import { Icon } from "../../index";

/**
 * A component that renders the `trash-list` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-list?s=solid trash-list}
 * @preview ![trash-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/trash-list.svg)
 */
const TrashList: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M147.8 0L268.2 0c12.1 0 23.2 6.8 28.6 17.7L304 32l80 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l80 0 7.2-14.3C124.6 6.8 135.7 0 147.8 0zM32 128l352 0L362.8 467c-1.6 25.3-22.6 45-47.9 45l-213.8 0c-25.3 0-46.3-19.7-47.9-45L32 128zm448 0l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zM448 416c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default TrashList;