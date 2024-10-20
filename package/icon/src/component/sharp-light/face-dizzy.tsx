
import { Icon } from "../../index";

/**
 * A component that renders the `face-dizzy` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-dizzy?s=sharp-light face-dizzy}
 * @preview ![face-dizzy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-dizzy.svg)
 */
const FaceDizzy: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm208 96a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160zM137.4 192l-36.7-36.7 22.6-22.6L160 169.4l36.7-36.7 22.6 22.6L182.6 192l36.7 36.7-22.6 22.6L160 214.6l-36.7 36.7-22.6-22.6L137.4 192zm192 0l-36.7-36.7 22.6-22.6L352 169.4l36.7-36.7 22.6 22.6L374.6 192l36.7 36.7-22.6 22.6L352 214.6l-36.7 36.7-22.6-22.6L329.4 192z" />
    </Icon>
);

export default FaceDizzy;