
import { Icon } from "../../index";

/**
 * A component that renders the `volcano` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volcano?s=sharp-solid volcano}
 * @preview ![volcano](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/volcano.svg)
 */
const Volcano: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 144c-35.3 0-64-28.7-64-64s28.7-64 64-64c15.7 0 30 5.6 41.2 15C212.4 12.4 232.7 0 256 0s43.6 12.4 54.8 31C322 21.6 336.3 16 352 16c35.3 0 64 28.7 64 64s-28.7 64-64 64l-48 0-32 48-32 0-32-48-48 0zM298.4 272l-84.9 0-66.2 74.5L240 320l80 64 54-27-75.6-85zM192 224l128 0L512 440l0 24 0 48-48 0L48 512 0 512l0-48 0-24L192 224z" />
    </Icon>
);

export default Volcano;