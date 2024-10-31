
import { Icon } from "../../index";

/**
 * A component that renders the `user-shield` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-shield?s=light user-shield}
 * @preview ![user-shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-shield.svg)
 */
const UserShield: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 128a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM32 480c1.2-79.7 66.2-144 146.3-144l91.4 0c19.4 0 37.9 3.8 54.9 10.6c-2.2-12.4-3.5-24.3-4.1-35.3c-16.1-4.8-33.1-7.3-50.7-7.3l-91.4 0C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c1.8 0 3.5-.2 5.3-.5c-13.4-9.7-25.1-20.3-35.5-31.5L32 480zm352-178.6L480 263l0 208.4c-73.4-40.5-94.6-117.1-95.9-170zm223.9 0c-1.3 53-22.6 129.5-95.9 170L512 263l95.9 38.4zm-103-75.7c-5.7-2.3-12.1-2.3-17.8 0l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48z" />
    </Icon>
);

export default UserShield;