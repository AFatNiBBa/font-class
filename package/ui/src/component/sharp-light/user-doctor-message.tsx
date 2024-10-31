
import { Icon } from "../../index";

/**
 * A component that renders the `user-doctor-message` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor-message?s=sharp-light user-doctor-message}
 * @preview ![user-doctor-message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/user-doctor-message.svg)
 */
const UserDoctorMessage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 128a96 96 0 1 1 -192 0 96 96 0 1 1 192 0zM224 0a128 128 0 1 0 0 256A128 128 0 1 0 224 0zM87.6 336l56.4 0 0 34.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3l0-34.7 112 0 0 34.3c-23.1 6.9-40 28.3-40 53.7l0 24 0 16 16 0 16 0 16 0 0-32-16 0 0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8-16 0 0 32 16 0 16 0 16 0 0-16 0-24c0-25.4-16.9-46.8-40-53.7l0-34.3 40.4 0 44.3 144L43.3 480 87.6 336zM176 416a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM384 304L64 304 9.8 480 0 512l33.5 0 381 0 33.5 0-9.8-32L384 304zm224-80l32 0 0-32 0-160 0-32L608 0 416 0 384 0l0 32 0 160 0 32 32 0 32 0 0 32 0 13.3 0 10.7 0 16 12.8-9.6 8.5-6.4 10.7-8 64-48 64 0zm-83.2-25.6L480 232l0-8 0-32-32 0-32 0 0-160 192 0 0 160-64 0-10.7 0-8.5 6.4z" />
    </Icon>
);

export default UserDoctorMessage;