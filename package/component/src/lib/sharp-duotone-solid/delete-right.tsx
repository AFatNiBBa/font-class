
import { Icon, generic } from "../../index";

/**
 * A component that renders the `delete-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/delete-right?s=sharp-duotone-solid delete-right}
 * @preview ![delete-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/delete-right.svg)
 */
const DeleteRight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64l400 0L576 256 400 448 0 448 0 64zM126.1 192c5.7 5.7 11.3 11.3 17 17c15.7 15.7 31.4 31.4 47 47c-15.7 15.7-31.4 31.4-47 47c-5.7 5.7-11.3 11.3-17 17c11.3 11.3 22.6 22.6 33.9 33.9c5.7-5.7 11.3-11.3 17-17c15.7-15.7 31.4-31.4 47-47l47 47 17 17c11.3-11.3 22.6-22.6 33.9-33.9c-5.7-5.7-11.3-11.3-17-17c-15.7-15.7-31.4-31.4-47-47c15.7-15.7 31.4-31.4 47-47c5.7-5.7 11.3-11.3 17-17c-11.3-11.3-22.6-22.6-33.9-33.9c-5.7 5.7-11.3 11.3-17 17c-15.7 15.7-31.4 31.4-47 47c-15.7-15.7-31.4-31.4-47-47c-5.7-5.7-11.3-11.3-17-17c-11.3 11.3-22.6 22.6-33.9 33.9z" />
        <path d="M305 209l17-17L288 158.1l-17 17-47 47-47-47-17-17L126.1 192l17 17 47 47-47 47-17 17L160 353.9l17-17 47-47 47 47 17 17L321.9 320l-17-17-47-47 47-47z" />
    </Icon>
);

export default DeleteRight;