
import { Icon } from "../../index";

/**
 * A component that renders the `face-laugh` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-laugh?s=sharp-solid face-laugh}
 * @preview ![face-laugh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-laugh.svg)
 */
const FaceLaugh: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-80c-83 0-151.2-63.1-159.2-144l318.4 0c-8 80.9-76.2 144-159.2 144zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceLaugh;