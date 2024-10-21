
import { Icon } from "../../index";

/**
 * A component that renders the `file-contract` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-contract?s=sharp-solid file-contract}
 * @preview ![file-contract](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-contract.svg)
 */
const FileContract: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zM80 64l64 0 16 0 0 32-16 0L80 96 64 96l0-32 16 0zm0 64l64 0 16 0 0 32-16 0-64 0-16 0 0-32 16 0zm56 176l16 0 11.9 0 3.4 11.4 15.4 51.4 3-5.9 4.4-8.8 9.9 0 32 0 9.9 0 4.4 8.8L257.9 384l46.1 0 16 0 0 32-16 0-56 0-9.9 0-4.4-8.8L222.1 384l-12.2 0-11.6 23.2-4.4 8.8-9.9 0-8 0-11.9 0-3.4-11.4L144 349l-16.7 55.6L123.9 416 112 416l-32 0-16 0 0-32 16 0 20.1 0 20.6-68.6 3.4-11.4 11.9 0z" />
    </Icon>
);

export default FileContract;