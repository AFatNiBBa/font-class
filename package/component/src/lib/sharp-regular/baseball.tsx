
import { Icon } from "../../index";

/**
 * A component that renders the `baseball` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/baseball?s=sharp-regular baseball}
 * @preview ![baseball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/baseball.svg)
 */
const Baseball: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 463.8c0-12.2 1-24.2 3-35.8l47.3 7.9c-1.3 7.9-2.1 15.9-2.3 24.2C378.8 444 444 378.8 460.2 296c-8.2 .2-16.3 1-24.2 2.3L428 251c11.7-2 23.6-3 35.8-3C459.7 139.5 372.5 52.3 264 48.2c0 12.2-1 24.2-3 35.8L213.7 76c1.3-7.9 2.1-15.9 2.3-24.2C133.2 68 68 133.2 51.9 216c8.2-.2 16.3-1 24.2-2.3L84 261c-11.7 2-23.6 3-35.8 3C52.3 372.5 139.5 459.7 248 463.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM206.4 104l45.3 16C230.5 180.1 183.5 227.9 124 250.3l-16.9-44.9c46.3-17.4 82.9-54.6 99.4-101.3zm99.1 304l-45.3-16c21.2-60.1 68.2-107.9 127.7-130.3l16.9 44.9c-46.3 17.4-82.9 54.6-99.4 101.3z" />
    </Icon>
);

export default Baseball;