
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard-user` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-user?s=thin clipboard-user}
 * @preview ![clipboard-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/clipboard-user.svg)
 */
const ClipboardUser: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0c-37.1 0-67.6 28-71.6 64L112 64C91.1 64 73.3 77.4 66.7 96L64 96C28.7 96 0 124.7 0 160L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64l-2.7 0c-6.6-18.6-24.4-32-45.3-32l-8.4 0c-4-36-34.5-64-71.6-64zM16 160c0-26.5 21.5-48 48-48l0 16c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-16c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-288zM136 72c0-30.9 25.1-56 56-56s56 25.1 56 56c0 4.4 3.6 8 8 8l16 0c17.7 0 32 14.3 32 32l0 16c0 8.8-7.2 16-16 16L96 144c-8.8 0-16-7.2-16-16l0-16c0-17.7 14.3-32 32-32l16 0c4.4 0 8-3.6 8-8zm56 24a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0 112a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-40 48l80 0c30.9 0 56 25.1 56 56c0 4.4-3.6 8-8 8l-176 0c-4.4 0-8-3.6-8-8c0-30.9 25.1-56 56-56zM80 424c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24c0-39.8-32.2-72-72-72l-80 0c-39.8 0-72 32.2-72 72z" />
    </Icon>
);

export default ClipboardUser;