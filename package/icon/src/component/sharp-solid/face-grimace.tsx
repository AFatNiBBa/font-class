
import { Icon } from "../../index";

/**
 * A component that renders the `face-grimace` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grimace?s=sharp-solid face-grimace}
 * @preview ![face-grimace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-grimace.svg)
 */
const FaceGrimace: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM400 400l-56 0 0-40 56 0 0 40zm0-56l-56 0 0-40 56 0 0 40zm-72 0l-64 0 0-40 64 0 0 40zm0 56l-64 0 0-40 64 0 0 40zm-80-96l0 40-64 0 0-40 64 0zm0 56l0 40-64 0 0-40 64 0zm-80-16l-56 0 0-40 56 0 0 40zm0 56l-56 0 0-40 56 0 0 40zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceGrimace;