
import { Icon } from "../../index";

/**
 * A component that renders the `delete-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/delete-right?s=light delete-right}
 * @preview ![delete-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/delete-right.svg)
 */
const DeleteRight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 128c0-17.7 14.3-32 32-32l306.7 0c8.5 0 16.6 3.4 22.6 9.4L544 256 393.4 406.6c-6 6-14.1 9.4-22.6 9.4L64 416c-17.7 0-32-14.3-32-32l0-256zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l306.7 0c17 0 33.3-6.7 45.3-18.7L566.6 278.6c6-6 9.4-14.1 9.4-22.6s-3.4-16.6-9.4-22.6L416 82.7C404 70.7 387.7 64 370.7 64L64 64zm84.7 116.7c-6.2 6.2-6.2 16.4 0 22.6L201.4 256l-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L224 278.6l52.7 52.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L246.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 233.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0z" />
    </Icon>
);

export default DeleteRight;