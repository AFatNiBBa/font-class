
import { Icon } from "../../index";

/**
 * A component that renders the `user-doctor` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor?s=light user-doctor}
 * @preview ![user-doctor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-doctor.svg)
 */
const UserDoctor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm48 288a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm32-45.3l0-34.7 1.2 0 93.6 0c5.8 0 11.5 .3 17.2 1l0 33.3c-23.1 6.9-40 28.3-40 53.7l0 24c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-24c0-25.4-16.9-46.8-40-53.7l0-25.8c55.6 20 95.5 73 96 135.5L32 480c.5-68.2 48.2-125.3 112-140.2l0 30.9c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3zm1.2-66.7C79.3 304 0 383.3 0 481.2c0 17 13.8 30.8 30.8 30.8l386.4 0c17 0 30.8-13.8 30.8-30.8C448 383.3 368.7 304 270.8 304l-93.6 0z" />
    </Icon>
);

export default UserDoctor;