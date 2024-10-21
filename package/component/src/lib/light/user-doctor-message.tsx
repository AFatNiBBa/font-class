
import { Icon } from "../../index";

/**
 * A component that renders the `user-doctor-message` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor-message?s=light user-doctor-message}
 * @preview ![user-doctor-message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-doctor-message.svg)
 */
const UserDoctorMessage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 128a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zm96 128A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM160 432a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16-96l0 34.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-30.9C80.2 354.7 32.6 411.8 32 480l384 0c-.5-62.4-40.4-115.4-96-135.5l0 25.8c23.1 6.9 40 28.3 40 53.7l0 24c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l0-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-24c0-25.4 16.9-46.8 40-53.7l0-33.3c-5.6-.7-11.4-1-17.2-1l-93.6 0-1.2 0zM0 481.2C0 383.3 79.3 304 177.2 304l93.6 0C368.7 304 448 383.3 448 481.2c0 17-13.8 30.8-30.8 30.8L30.8 512C13.8 512 0 498.2 0 481.2zM544 192l48 0c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16L432 32c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16l16 0c17.7 0 32 14.3 32 32l0 8 44.8-33.6c5.5-4.2 12.3-6.4 19.2-6.4zm-65.1 80.8l-9.6 7.2-8.5 6.4c-2.4 1.8-5.7 2.1-8.4 .8s-4.4-4.1-4.4-7.2l0-10.7 0-12 0-1.4 0-32-16 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48L592 0c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-48 0-64 48-1.1 .8z" />
    </Icon>
);

export default UserDoctorMessage;