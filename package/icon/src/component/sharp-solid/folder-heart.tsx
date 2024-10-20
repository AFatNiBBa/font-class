
import { Icon } from "../../index";

/**
 * A component that renders the `folder-heart` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-heart?s=sharp-solid folder-heart}
 * @preview ![folder-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/folder-heart.svg)
 */
const FolderHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 96l0 384L0 480 0 32l224 0 48 64 240 0zM144 251.2c0 16.1 6.6 31.5 18.2 42.7l82.8 79.6L256 384.1l11.1-10.7 82.8-79.6c11.6-11.2 18.2-26.6 18.2-42.7c0-32.7-26.5-59.2-59.2-59.2l-2.4 0c-15.9 0-31.2 6.2-42.7 17.2l-7.7 7.4-7.7-7.4c-11.5-11-26.8-17.2-42.7-17.2l-2.4 0c-32.7 0-59.2 26.5-59.2 59.2z" />
    </Icon>
);

export default FolderHeart;