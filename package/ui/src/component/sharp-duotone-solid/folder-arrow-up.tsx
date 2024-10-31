
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-arrow-up?s=sharp-duotone-solid folder-arrow-up}
 * @preview ![folder-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/folder-arrow-up.svg)
 */
const FolderArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384L272 96 224 32 0 32zM150.1 272c5.7-5.7 11.3-11.3 17-17c24-24 48-48 72-72l17-17 17 17c24 24 48 48 72 72c5.7 5.7 11.3 11.3 17 17c-11.3 11.3-22.6 22.6-33.9 33.9c-5.7-5.7-11.3-11.3-17-17c-10.3-10.3-20.7-20.7-31-31c0 34 0 68 0 102.1c0 8 0 16 0 24l-48 0c0-8 0-16 0-24c0-34 0-68 0-102.1c-10.3 10.3-20.7 20.7-31 31c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9z" />
        <path d="M280 384l0-24 0-102.1 31 31 17 17L361.9 272l-17-17-72-72-17-17-17 17-72 72-17 17L184 305.9l17-17 31-31L232 360l0 24 48 0z" />
    </Icon>
);

export default FolderArrowUp;