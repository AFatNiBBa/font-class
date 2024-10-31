
import { Icon } from "../../index";

/**
 * A component that renders the `narwhal` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/narwhal?s=regular narwhal}
 * @preview ![narwhal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/narwhal.svg)
 */
const Narwhal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M639.4 20.5c2.3-7.7-1.6-16-9-19.2s-16-.4-20.1 6.5L516 167.3c-15.7-4.7-32.3-7.3-49.6-7.3c-53.1 0-104.4 19.5-144.1 54.8L177.9 343.2c-6.4 5.7-14.6 8.8-23.1 8.8c-19.2 0-34.8-15.6-34.8-34.8l0-13.2 0-45.3 37.9-26.5c21.4-15 34.1-39.4 34.1-65.5l0-54.7c0-6-3.3-11.4-8.6-14.2s-11.7-2.3-16.6 1.1L96 148.5 25.2 98.9c-4.9-3.4-11.3-3.8-16.6-1.1S0 106 0 112l0 54.7c0 26.1 12.7 50.6 34.1 65.5L72 258.7 72 304l0 13.2L72 352c0 88.4 71.6 160 160 160l232 0c97.2 0 176-80 176-177.2c0-50.1-21.2-95.5-55.1-127.5L639.4 20.5zM232 464c-46.3 0-86-28.1-103.1-68.1c8.1 2.7 16.8 4.1 25.9 4.1c20.3 0 39.8-7.4 55-20.9L354.2 250.7c30.9-27.5 70.9-42.7 112.2-42.7C535.4 208 592 265 592 334.8C592 405.9 534.3 464 464 464l-232 0zM496 328a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Narwhal;