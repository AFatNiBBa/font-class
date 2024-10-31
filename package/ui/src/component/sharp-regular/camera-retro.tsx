
import { Icon } from "../../index";

/**
 * A component that renders the `camera-retro` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-retro?s=sharp-regular camera-retro}
 * @preview ![camera-retro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/camera-retro.svg)
 */
const CameraRetro: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 112L48 112l0 80 108.1 0c23.5-29.3 59.5-48 99.9-48s76.5 18.7 99.9 48L464 192l0-112L267.3 80l-53.9 26.9c-6.7 3.3-14 5.1-21.5 5.1zM48 240l0 192 416 0 0-192-84 0c2.6 10.2 4 21 4 32c0 70.7-57.3 128-128 128s-128-57.3-128-128c0-11 1.4-21.8 4-32l-84 0zM192 64l64-32 208 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 112 0 64l48 0 16 0 0-32 96 0 0 32 32 0zM336 272a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default CameraRetro;