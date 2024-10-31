
import { Icon } from "../../index";

/**
 * A component that renders the `eye-dropper` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-dropper?s=sharp-regular eye-dropper}
 * @preview ![eye-dropper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/eye-dropper.svg)
 */
const EyeDropper: typeof Icon = x => (
    <Icon {...x}>
        <path d="M377 279l1-1L482.2 173.8c19.1-19.1 29.8-45 29.8-72C512 45.6 466.4 0 410.2 0c-27 0-52.9 10.7-72 29.8L233.9 134.1l-1 1-8-8-17-17L174.1 144l17 17L351 321l17 17L401.9 304l-17-17-8-8zm-94.5 18.6L148.1 432 80 432l0-68.1L214.3 229.5l-33.9-33.9L32 344l0 88L0 472l40 40 40-32 88 0L316.4 331.6l-33.9-33.9zM448.2 139.9L344 244.1 267.9 168 372.1 63.8C382.2 53.7 395.9 48 410.2 48c29.7 0 53.8 24.1 53.8 53.8c0 14.3-5.7 28-15.8 38.1z" />
    </Icon>
);

export default EyeDropper;