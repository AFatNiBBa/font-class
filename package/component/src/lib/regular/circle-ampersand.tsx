
import { Icon } from "../../index";

/**
 * A component that renders the `circle-ampersand` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ampersand?s=regular circle-ampersand}
 * @preview ![circle-ampersand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-ampersand.svg)
 */
const CircleAmpersand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 191.6c0-8.6 7-15.6 15.6-15.6l19.2 0c7.3 0 13.2 5.9 13.2 13.2c0 4.2-2 8.1-5.4 10.6L235 217.1l-14.5-14.5c-2.9-2.9-4.6-6.9-4.6-11zm71 46.9c15.7-11.5 25-29.8 25-49.3c0-33.8-27.4-61.2-61.2-61.2l-19.2 0c-35.1 0-63.6 28.5-63.6 63.6c0 16.9 6.7 33 18.6 45l9.2 9.2-24.7 18.1c-17.1 12.5-27.2 32.4-27.2 53.6c0 36.7 29.8 66.5 66.5 66.5l32.2 0c24.1 0 46.9-10.9 62-29.4L327 377c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-28.4-28.4 31.1-45c7.5-10.9 4.8-25.8-6.1-33.4s-25.8-4.8-33.4 6.1l-26.2 37.8-28.7-28.7L287 238.5zm-87.5 64.1l30.7-22.5 40.1 40.1-1.4 2c-6 8.6-15.8 13.8-26.3 13.8l-32.2 0c-10.2 0-18.5-8.3-18.5-18.5c0-5.9 2.8-11.4 7.5-14.9z" />
    </Icon>
);

export default CircleAmpersand;