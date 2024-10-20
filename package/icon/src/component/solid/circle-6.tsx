
import { Icon } from "../../index";

/**
 * A component that renders the `circle-6` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-6?s=solid circle-6}
 * @preview ![circle-6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-6.svg)
 */
const Circle_6: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-16a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm-96 48c0 53 43 96 96 96s96-43 96-96c0-44-29.6-81.1-70-92.4l29.6-25.4c10.1-8.6 11.2-23.8 2.6-33.8s-23.8-11.2-33.8-2.6l-81.6 70C174.2 224.8 160 255.6 160 288z" />
    </Icon>
);

export default Circle_6;