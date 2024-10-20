
import { Icon } from "../../index";

/**
 * A component that renders the `volcano` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volcano?s=sharp-regular volcano}
 * @preview ![volcano](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/volcano.svg)
 */
const Volcano: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 144c-35.3 0-64-28.7-64-64s28.7-64 64-64c15.7 0 30 5.6 41.2 15C212.4 12.4 232.7 0 256 0s43.6 12.4 54.8 31C322 21.6 336.3 16 352 16c35.3 0 64 28.7 64 64s-28.7 64-64 64l-48 0-32 48-32 0-32-48-48 0zM48 458.2l0 5.8 416 0 0-5.8L361.3 342.7 336 368l-32 0-64-64-32 0-22.9 0L48 458.2zM192 224l128 0L512 440l0 24 0 48-48 0L48 512 0 512l0-48 0-24L192 224z" />
    </Icon>
);

export default Volcano;