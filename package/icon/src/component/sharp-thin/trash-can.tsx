
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can?s=sharp-thin trash-can}
 * @preview ![trash-can](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/trash-can.svg)
 */
const TrashCan: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0L288 0l4.4 0 2.4 3.8L332.4 64 448 64l0 16L0 80 0 64l115.6 0L153.2 3.8 155.6 0 160 0zM313.6 64l-30-48L164.4 16l-30 48 179.1 0zM32 504l0-392 16 0 0 384 352 0 0-384 16 0 0 392 0 8-8 0L40 512l-8 0 0-8zM136 160l0 256 0 8-16 0 0-8 0-256 0-8 16 0 0 8zm96 0l0 256 0 8-16 0 0-8 0-256 0-8 16 0 0 8zm96 0l0 256 0 8-16 0 0-8 0-256 0-8 16 0 0 8z" />
    </Icon>
);

export default TrashCan;