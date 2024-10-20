
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-arrow-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-arrow-up?s=sharp-solid trash-can-arrow-up}
 * @preview ![trash-can-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/trash-can-arrow-up.svg)
 */
const TrashCanArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 0l16 32 128 0 0 64L0 96 0 32l128 0L144 0 304 0zM32 128l384 0 0 384L32 512l0-384zm209 71l-17-17-17 17-80 80-17 17L144 329.9l17-17 39-39L200 408l0 24 48 0 0-24 0-134.1 39 39 17 17L337.9 296l-17-17-80-80z" />
    </Icon>
);

export default TrashCanArrowUp;