
import { Icon } from "../../index";

/**
 * A component that renders the `user-hair` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hair?s=sharp-solid user-hair}
 * @preview ![user-hair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-hair.svg)
 */
const UserHair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 144c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-16c0-5.5 .6-10.8 1.6-16l62.4 0 32-32 16 16 41.3 0c4.3 9.8 6.7 20.6 6.7 32l0 16zM224 0C153.3 0 96 57.3 96 128l0 16c0 70.7 57.3 128 128 128s128-57.3 128-128l0-16C352 57.3 294.7 0 224 0zM448 512L384 320 64 320 0 512l448 0z" />
    </Icon>
);

export default UserHair;