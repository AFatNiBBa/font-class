
import { Icon } from "../../index";

/**
 * A component that renders the `comment` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment?s=sharp-solid comment}
 * @preview ![comment](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/comment.svg)
 */
const Comment: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1z" />
    </Icon>
);

export default Comment;