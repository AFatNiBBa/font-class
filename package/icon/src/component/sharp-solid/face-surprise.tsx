
import { Icon } from "../../index";

/**
 * A component that renders the `face-surprise` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-surprise?s=sharp-solid face-surprise}
 * @preview ![face-surprise](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-surprise.svg)
 */
const FaceSurprise: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176.4 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM256 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default FaceSurprise;