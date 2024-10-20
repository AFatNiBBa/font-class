
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-nurse-hair-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-nurse-hair-long?s=sharp-duotone-solid user-nurse-hair-long}
 * @preview ![user-nurse-hair-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-nurse-hair-long.svg)
 */
const UserNurseHairLong: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M128 160c0 53 43 96 96 96s96-43 96-96l0-16-8 0c-.2 0-.5 0-.7 0L288 144l-32-16-32 32-47.1 0c-.3 0-.6 0-.9 0l-48 0z" />
        <path d="M48 288l0-32 48-48L96 48 224 0 352 48l0 160 48 48 0 32L48 288zM208 64l-24 0 0 32 24 0 0 24 32 0 0-24 24 0 0-32-24 0 0-24-32 0 0 24zm-31.1 96l-.9 0-48 0c0 53 43 96 96 96s96-43 96-96l0-16-8 0-.7 0L288 144l-32-16-32 32-47.1 0zM224 424l82.8-88 77.2 0 64 176L0 512 64 336l77.2 0L224 424z" />
    </Icon>
);

export default UserNurseHairLong;