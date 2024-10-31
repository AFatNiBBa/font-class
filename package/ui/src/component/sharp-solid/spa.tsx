
import { Icon } from "../../index";

/**
 * A component that renders the `spa` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spa?s=sharp-solid spa}
 * @preview ![spa](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/spa.svg)
 */
const Spa: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M207.8 252.3C158.4 214.4 96.5 192 30 192L0 192C0 351.1 128.9 480 288 480s288-128.9 288-288l-30 0c-56.1 0-108.8 15.9-153.6 43.6c-33.5 20.7-62.5 48-85.3 80.2c-7 9.9-13.4 20.3-19.1 31c-5.7-10.8-12.1-21.1-19.1-31c-17.1-24.2-37.7-45.6-61-63.5zM288 32s-66.4 56.9-97 170.8c37.7 21.6 70.7 50.5 97 85c26.3-34.5 59.3-63.4 97-85C354.4 88.9 288 32 288 32z" />
    </Icon>
);

export default Spa;