
import { Icon } from "../../index";

/**
 * A component that renders the `face-frown-slight` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-frown-slight?s=sharp-solid face-frown-slight}
 * @preview ![face-frown-slight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-frown-slight.svg)
 */
const FaceFrownSlight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM382.3 392.8l-28.6 14.3C344.9 389.7 312.4 352 256 352s-88.9 37.7-97.7 55.2l-28.6-14.3C142.3 367.7 184.4 320 256 320s113.7 47.7 126.3 72.8zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceFrownSlight;