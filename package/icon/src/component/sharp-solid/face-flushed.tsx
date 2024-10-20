
import { Icon } from "../../index";

/**
 * A component that renders the `face-flushed` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-flushed?s=sharp-solid face-flushed}
 * @preview ![face-flushed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-flushed.svg)
 */
const FaceFlushed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM176 400l16 0 128 0 16 0 0-32-16 0-128 0-16 0 0 32zM160 296a72 72 0 1 0 0-144 72 72 0 1 0 0 144zm264-72a72 72 0 1 0 -144 0 72 72 0 1 0 144 0zm-288 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm192 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default FaceFlushed;