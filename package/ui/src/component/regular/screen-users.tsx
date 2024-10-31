
import { Icon } from "../../index";

/**
 * A component that renders the `screen-users` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screen-users?s=regular screen-users}
 * @preview ![screen-users](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/screen-users.svg)
 */
const ScreenUsers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 384a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM64 416c-35.3 0-64 28.7-64 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64l-64 0zm256-32a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-35.3 0-64 28.7-64 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64l-64 0zm320-96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM448 480c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64l-64 0c-35.3 0-64 28.7-64 64zM544 48L96 48c-8.8 0-16 7.2-16 16l0 161.3c-18.3 3.1-34.8 11.3-48 23.1L32 64C32 28.7 60.7 0 96 0L544 0c35.3 0 64 28.7 64 64l0 184.4c-13.2-11.8-29.7-20.1-48-23.1L560 64c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default ScreenUsers;