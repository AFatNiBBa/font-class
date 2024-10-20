
import { Icon } from "../../index";

/**
 * A component that renders the `face-laugh-squint` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-laugh-squint?s=sharp-solid face-laugh-squint}
 * @preview ![face-laugh-squint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-laugh-squint.svg)
 */
const FaceLaughSquint: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-80c-83 0-151.2-63.1-159.2-144l318.4 0c-8 80.9-76.2 144-159.2 144zM112 112l118.9 64L112 240l45.7-64L112 112zm169.1 64L400 112l-45.7 64L400 240 281.1 176z" />
    </Icon>
);

export default FaceLaughSquint;