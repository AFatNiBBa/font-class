
import { Icon } from "../../index";

/**
 * A component that renders the `user-doctor-message` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor-message?s=sharp-regular user-doctor-message}
 * @preview ![user-doctor-message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-doctor-message.svg)
 */
const UserDoctorMessage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M304 128a80 80 0 1 1 -160 0 80 80 0 1 1 160 0zM224 0a128 128 0 1 0 0 256A128 128 0 1 0 224 0zM50.2 512L99.5 352l36.5 0 0 50.3c-23.1 6.9-40 28.3-40 53.7c0 30.9 25.1 56 56 56s56-25.1 56-56c0-25.4-16.9-46.8-40-53.7l0-50.3 112 0 0 50c-27.6 7.1-48 32.2-48 62l0 32 0 16 16 0 24 0 16 0 0-32-16 0-8 0 0-16c0-17.7 14.3-32 32-32s32 14.3 32 32l0 16-8 0-16 0 0 32 16 0 24 0 16 0 0-16 0-32c0-29.8-20.4-54.9-48-62l0-50 36.5 0 49.2 160 50.2 0L384 304 64 304 0 512l50.2 0zM152 432a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM384 0l0 224 64 0 0 64 96-64 96 0L640 0 384 0z" />
    </Icon>
);

export default UserDoctorMessage;