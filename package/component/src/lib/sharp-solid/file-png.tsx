
import { Icon } from "../../index";

/**
 * A component that renders the `file-png` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-png?s=sharp-solid file-png}
 * @preview ![file-png](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-png.svg)
 */
const FilePng: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L224 0l0 160 160 0 0 144-272 0 0 208L0 512 0 0zM384 128l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32 0 16-32 0 0-16 0-48 0-80 0-16 16 0zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l4 0 10.6 0 4.1 9.7L352 430.6l0-62.6 0-16 32 0 0 16 0 128 0 16-16 0-5.6 0-10.6 0-4.1-9.7L320 437.1l0 58.9 0 16-32 0 0-16 0-128 0-16 16 0zm112 40c0-22.1 17.9-40 40-40l16 0c22.1 0 40 17.9 40 40l0 16-32 0 0-16c0-4.4-3.6-8-8-8l-16 0c-4.4 0-8 3.6-8 8l0 80c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-8-16 0 0-32 16 0 16 0 16 0 0 16 0 24c0 22.1-17.9 40-40 40l-16 0c-22.1 0-40-17.9-40-40l0-80z" />
    </Icon>
);

export default FilePng;