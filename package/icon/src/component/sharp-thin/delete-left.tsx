
import { Icon } from "../../index";

/**
 * A component that renders the `delete-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/delete-left?s=sharp-thin delete-left}
 * @preview ![delete-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/delete-left.svg)
 */
const DeleteLeft: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 448l-16 0-384 0L0 256 176 64l384 0 16 0 0 16 0 352 0 16zM21.7 256L183 432l377 0 0-352L183 80 21.7 256zm400.5-81.5l11.3 11.3-5.7 5.7L363.3 256l64.6 64.6 5.7 5.7-11.3 11.3-5.7-5.7L352 267.3l-64.6 64.6-5.7 5.7-11.3-11.3 5.7-5.7L340.7 256l-64.6-64.6-5.7-5.7 11.3-11.3 5.7 5.7L352 244.7l64.6-64.6 5.7-5.7z" />
    </Icon>
);

export default DeleteLeft;