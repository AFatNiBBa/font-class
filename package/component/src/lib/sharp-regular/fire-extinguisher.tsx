
import { Icon } from "../../index";

/**
 * A component that renders the `fire-extinguisher` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-extinguisher?s=sharp-regular fire-extinguisher}
 * @preview ![fire-extinguisher](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/fire-extinguisher.svg)
 */
const FireExtinguisher: typeof Icon = x => (
    <Icon {...x}>
        <path d="M200 0l0 24 0 32 88 0 0-24L512 0l0 160L288 128l0-24-88 0 0 26.6c50.3 11 88 55.8 88 109.4l0 224 0 48-48 0-128 0-48 0 0-48 0-224c0-53.6 37.7-98.4 88-109.4l0-25.6c-46.9 5.5-86.5 34.8-106.3 75.6l-43.1-21C30.1 102.8 86.1 62.4 152 56.7L152 24l0-24 48 0zM112 464l128 0 0-48-128 0 0 48zm0-224l0 128 128 0 0-128c0-35.3-28.7-64-64-64s-64 28.7-64 64z" />
    </Icon>
);

export default FireExtinguisher;