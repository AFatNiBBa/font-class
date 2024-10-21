
import { Icon, generic } from "../../index";

/**
 * A component that renders the `delete-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/delete-left?s=sharp-duotone-solid delete-left}
 * @preview ![delete-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/delete-left.svg)
 */
const DeleteLeft: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256L176 448l400 0 0-384L176 64 0 256zm254.1-64c11.3-11.3 22.6-22.6 33.9-33.9l17 17 47 47c15.7-15.7 31.3-31.3 47-47c5.7-5.7 11.3-11.3 17-17L449.9 192c-5.7 5.7-11.3 11.3-17 17c-15.7 15.7-31.3 31.3-47 47c15.7 15.7 31.4 31.4 47 47c5.7 5.7 11.3 11.3 17 17L416 353.9c-5.7-5.7-11.3-11.3-17-17c-15.7-15.7-31.4-31.4-47-47c-15.7 15.7-31.4 31.3-47 47c-5.7 5.7-11.3 11.3-17 17L254.1 320c5.7-5.7 11.3-11.3 17-17c15.7-15.7 31.4-31.3 47-47l-47-47-17-17z" />
        <path d="M433 209l17-17L416 158.1l-17 17-47 47-47-47-17-17L254.1 192l17 17 47 47-47 47-17 17L288 353.9l17-17 47-47 47 47 17 17L449.9 320l-17-17-47-47 47-47z" />
    </Icon>
);

export default DeleteLeft;