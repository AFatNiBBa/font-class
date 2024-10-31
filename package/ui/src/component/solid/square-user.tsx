
import { Icon } from "../../index";

/**
 * A component that renders the `square-user` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-user?s=solid square-user}
 * @preview ![square-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-user.svg)
 */
const SquareUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M81.1 416l285.7 0c-7.8-54.3-54.4-96-110.9-96l-64 0c-56.4 0-103.1 41.7-110.9 96zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM224 272a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
    </Icon>
);

export default SquareUser;