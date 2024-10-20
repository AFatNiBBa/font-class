
import { Icon } from "../../index";

/**
 * A component that renders the `melon` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/melon?s=regular melon}
 * @preview ![melon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/melon.svg)
 */
const Melon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256c0-25.8-4.7-50.4-13.2-73.2c-14.9 51.3-51.2 110.5-104.3 163.6s-112.3 89.4-163.6 104.3c22.8 8.6 47.4 13.2 73.2 13.2c114.9 0 208-93.1 208-208zM61.2 329.2c14.9-51.3 51.2-110.5 104.3-163.6s112.3-89.4 163.6-104.3C306.4 52.7 281.8 48 256 48C141.1 48 48 141.1 48 256c0 25.8 4.7 50.4 13.2 73.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM403 109c-5.2-5.2-24.1-13.9-67.8 .7c-40.7 13.6-89.8 44-135.7 89.9s-76.3 95-89.9 135.7c-14.6 43.7-5.8 62.6-.7 67.8s24.1 13.9 67.8-.7c40.7-13.6 89.9-44 135.7-89.9s76.3-95 89.9-135.7c14.6-43.7 5.8-62.6 .7-67.8z" />
    </Icon>
);

export default Melon;