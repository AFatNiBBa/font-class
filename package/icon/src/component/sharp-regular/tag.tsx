
import { Icon } from "../../index";

/**
 * A component that renders the `tag` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tag?s=sharp-regular tag}
 * @preview ![tag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tag.svg)
 */
const Tag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 412.1L48 236.1 48 80l156.1 0 176 176L224 412.1zM414.1 222.1L224 32 48 32 0 32 0 80 0 256 190.1 446.1 224 480l33.9-33.9L414.1 289.9 448 256l-33.9-33.9zM112 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Tag;