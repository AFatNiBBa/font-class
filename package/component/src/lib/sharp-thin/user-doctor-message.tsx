
import { Icon } from "../../index";

/**
 * A component that renders the `user-doctor-message` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor-message?s=sharp-thin user-doctor-message}
 * @preview ![user-doctor-message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-doctor-message.svg)
 */
const UserDoctorMessage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M336 128a112 112 0 1 1 -224 0 112 112 0 1 1 224 0zM224 0a128 128 0 1 0 0 256A128 128 0 1 0 224 0zM75.8 320l60.2 0 0 48.7c-22.7 3.8-40 23.6-40 47.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-23.8-17.3-43.5-40-47.3l0-48.7 144 0 0 48.7c-22.7 3.8-40 23.6-40 47.3l0 40 0 8 8 0 16 0 8 0 0-16-8 0-8 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32-8 0-8 0 0 16 8 0 16 0 8 0 0-8 0-40c0-23.8-17.3-43.5-40-47.3l0-48.7 60.2 0 54.2 176L21.7 496 75.8 320zM176 416a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM384 304L64 304 4.9 496 0 512l16.7 0 414.5 0 16.7 0-4.9-16L384 304zm240-80l16 0 0-16 0-192 0-16L624 0 400 0 384 0l0 16 0 192 0 16 16 0 32 0 16 0 0 16 0 36 0 4 0 16 12.8-9.6L464 284l80-60 80 0zm-89.6-12.8L464 264l0-40 0-16-16 0-48 0 0-192 224 0 0 192-80 0-5.3 0-4.3 3.2z" />
    </Icon>
);

export default UserDoctorMessage;