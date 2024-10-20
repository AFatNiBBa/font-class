
import { Icon } from "../../index";

/**
 * A component that renders the `delete-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/delete-left?s=sharp-light delete-left}
 * @preview ![delete-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/delete-left.svg)
 */
const DeleteLeft: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 448l-32 0-368 0L0 256 176 64l368 0 32 0 0 32 0 320 0 32zM43.4 256L190.1 416 544 416l0-320L190.1 96 43.4 256zm373.2-87.2l22.6 22.6-11.3 11.3L374.6 256l53.3 53.3 11.3 11.3-22.6 22.6-11.3-11.3L352 278.6l-53.3 53.3-11.3 11.3-22.6-22.6 11.3-11.3L329.4 256l-53.3-53.3-11.3-11.3 22.6-22.6 11.3 11.3L352 233.4l53.3-53.3 11.3-11.3z" />
    </Icon>
);

export default DeleteLeft;