
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can?s=sharp-solid trash-can}
 * @preview ![trash-can](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/trash-can.svg)
 */
const TrashCan: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 0L304 0l16 32 128 0 0 64L0 96 0 32l128 0L144 0zM32 128l384 0 0 384L32 512l0-384zm112 64l-32 0 0 16 0 224 0 16 32 0 0-16 0-224 0-16zm96 0l-32 0 0 16 0 224 0 16 32 0 0-16 0-224 0-16zm96 0l-32 0 0 16 0 224 0 16 32 0 0-16 0-224 0-16z" />
    </Icon>
);

export default TrashCan;