
import { Icon } from "../../index";

/**
 * A component that renders the `face-dizzy` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-dizzy?s=sharp-thin face-dizzy}
 * @preview ![face-dizzy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-dizzy.svg)
 */
const FaceDizzy: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm200 96a56 56 0 1 0 112 0 56 56 0 1 0 -112 0zm56 72a72 72 0 1 1 0-144 72 72 0 1 1 0 144zM148.7 192l-42.3-42.3 11.3-11.3L160 180.7l42.3-42.3 11.3 11.3L171.3 192l42.3 42.3-11.3 11.3L160 203.3l-42.3 42.3-11.3-11.3L148.7 192zm192 0l-42.3-42.3 11.3-11.3L352 180.7l42.3-42.3 11.3 11.3L363.3 192l42.3 42.3-11.3 11.3L352 203.3l-42.3 42.3-11.3-11.3L340.7 192z" />
    </Icon>
);

export default FaceDizzy;