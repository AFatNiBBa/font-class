
import { Icon } from "../../index";

/**
 * A component that renders the `face-frown-open` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-frown-open?s=sharp-solid face-frown-open}
 * @preview ![face-frown-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-frown-open.svg)
 */
const FaceFrownOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176.4 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM255.6 368c-38.7 0-74.5 11.4-103.6 30.6c4.7-53 49.3-94.6 103.6-94.6s98.8 41.6 103.6 94.6C330.1 379.4 294.3 368 255.6 368z" />
    </Icon>
);

export default FaceFrownOpen;