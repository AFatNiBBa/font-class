
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard-user` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-user?s=sharp-thin clipboard-user}
 * @preview ![clipboard-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clipboard-user.svg)
 */
const ClipboardUser: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M254.7 67.2C248.8 38 222.9 16 192 16s-56.8 22-62.7 51.2L126.7 80l-13.1 0L80 80l0 64 112 0 112 0 0-64-33.6 0-13.1 0-2.6-12.8zM80 64l33.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64L304 64l16 0 0 16 0 16 56 0 8 0 0 8 0 400 0 8-8 0L8 512l-8 0 0-8L0 104l0-8 8 0 56 0 0-16 0-16 16 0zM64 112l-48 0 0 384 352 0 0-384-48 0 0 32 0 16-16 0-112 0L80 160l-16 0 0-16 0-32zM176 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16 224a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM123.5 368l-21.3 64 179.6 0-21.3-64-136.9 0zM272 352l26.7 80 5.3 16-16.9 0L96.9 448 80 448l5.3-16L112 352l160 0z" />
    </Icon>
);

export default ClipboardUser;