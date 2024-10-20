
import { Icon } from "../../index";

/**
 * A component that renders the `square-user` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-user?s=regular square-user}
 * @preview ![square-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-user.svg)
 */
const SquareUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16l-1 0c-7.9-63.1-61.7-112-127-112l-64 0c-65.3 0-119.1 48.9-127 112l-1 0c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM334.4 432l-220.8 0c7.4-36.5 39.7-64 78.4-64l64 0c38.7 0 71 27.5 78.4 64zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 240a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
    </Icon>
);

export default SquareUser;