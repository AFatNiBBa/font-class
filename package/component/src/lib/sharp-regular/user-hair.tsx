
import { Icon } from "../../index";

/**
 * A component that renders the `user-hair` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-hair?s=sharp-regular user-hair}
 * @preview ![user-hair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-hair.svg)
 */
const UserHair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 144l0-16c0-11.4-2.4-22.2-6.7-32L256 96 240 80l-32 32-62.4 0c-1 5.2-1.6 10.5-1.6 16l0 16c0 44.2 35.8 80 80 80s80-35.8 80-80zM224 0c70.7 0 128 57.3 128 128l0 16c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-16C96 57.3 153.3 0 224 0zM66.6 464l314.8 0-32-96L98.6 368l-32 96zM64 320l320 0 48 144 16 48-50.6 0L50.6 512 0 512l16-48L64 320z" />
    </Icon>
);

export default UserHair;