
import { Icon } from "../../index";

/**
 * A component that renders the `delete-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/delete-right?s=sharp-light delete-right}
 * @preview ![delete-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/delete-right.svg)
 */
const DeleteRight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 448l32 0 368 0L576 256 400 64 32 64 0 64 0 96 0 416l0 32zM532.6 256L385.9 416 32 416 32 96l353.9 0L532.6 256zM159.4 168.8l-22.6 22.6 11.3 11.3L201.4 256l-53.3 53.3-11.3 11.3 22.6 22.6 11.3-11.3L224 278.6l53.3 53.3 11.3 11.3 22.6-22.6-11.3-11.3L246.6 256l53.3-53.3 11.3-11.3-22.6-22.6-11.3 11.3L224 233.4l-53.3-53.3-11.3-11.3z" />
    </Icon>
);

export default DeleteRight;