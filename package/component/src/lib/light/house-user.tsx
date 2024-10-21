
import { Icon } from "../../index";

/**
 * A component that renders the `house-user` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-user?s=light house-user}
 * @preview ![house-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/house-user.svg)
 */
const HouseUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M277.4 4c6-5.3 15.1-5.3 21.2 0l272 240c6.6 5.8 7.3 16 1.4 22.6s-16 7.3-22.6 1.4L512 235l0 197c0 44.2-35.8 80-80 80l-288 0c-44.2 0-80-35.8-80-80l0-197L26.6 268C20 273.8 9.8 273.2 4 266.6S-1.2 249.8 5.4 244L277.4 4zM96 206.7L96 432c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-225.3L288 37.3 96 206.7zM288 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM208 392l0 8c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-8c0-39.8 32.2-72 72-72l80 0c39.8 0 72 32.2 72 72l0 8c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-8c0-22.1-17.9-40-40-40l-80 0c-22.1 0-40 17.9-40 40z" />
    </Icon>
);

export default HouseUser;