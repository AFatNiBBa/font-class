
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-check?s=sharp-solid trash-can-check}
 * @preview ![trash-can-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/trash-can-check.svg)
 */
const TrashCanCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 0l16 32 128 0 0 64L0 96 0 32l128 0L144 0 304 0zM32 128l384 0 0 384L32 512l0-384zM337 265l17-17L320 214.1l-17 17-111 111-47-47-17-17L94.1 312l17 17 64 64 17 17 17-17L337 265z" />
    </Icon>
);

export default TrashCanCheck;