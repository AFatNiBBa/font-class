
import { Icon } from "../../index";

/**
 * A component that renders the `delete-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/delete-right?s=sharp-thin delete-right}
 * @preview ![delete-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/delete-right.svg)
 */
const DeleteRight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 448l16 0 384 0L576 256 400 64 16 64 0 64 0 80 0 432l0 16zM554.3 256L393 432 16 432 16 80l377 0L554.3 256zM153.8 174.5l-11.3 11.3 5.7 5.7L212.7 256l-64.6 64.6-5.7 5.7 11.3 11.3 5.7-5.7L224 267.3l64.6 64.6 5.7 5.7 11.3-11.3-5.7-5.7L235.3 256l64.6-64.6 5.7-5.7-11.3-11.3-5.7 5.7L224 244.7l-64.6-64.6-5.7-5.7z" />
    </Icon>
);

export default DeleteRight;