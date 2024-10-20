
import { Icon } from "../../index";

/**
 * A component that renders the `file-gif` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-gif?s=sharp-regular file-gif}
 * @preview ![file-gif](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-gif.svg)
 */
const FileGif: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 464L48 464 48 48l176 0 0 112 112 0 0 144 48 0 0-176L256 0 48 0 0 0 0 48 0 464l0 48 48 0 128 0 0-48zm48-72l0 80c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-24 0-16-16 0-16 0-16 0 0 32 16 0 0 8c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8l16 0c4.4 0 8 3.6 8 8l0 16 32 0 0-16c0-22.1-17.9-40-40-40l-16 0c-22.1 0-40 17.9-40 40zm160-24l0-16-32 0 0 16 0 128 0 16 32 0 0-16 0-128zm48-16l-16 0 0 16 0 64 0 64 0 16 32 0 0-16 0-48 32 0 16 0 0-32-16 0-32 0 0-32 32 0 16 0 0-32-16 0-48 0z" />
    </Icon>
);

export default FileGif;