
import { Icon } from "../../index";

/**
 * A component that renders the `whistle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whistle?s=sharp-solid whistle}
 * @preview ![whistle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/whistle.svg)
 */
const Whistle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M44.1 188.8C18.5 180.5 0 156.4 0 128C0 92.7 28.7 64 64 64c23.4 0 43.8 12.5 55 31.2C149.2 75.5 185.2 64 224 64c46.6 0 91.9 15.7 128.5 44.7l78.1 61.8L416 224l32 24 45.9-27.5L640 336 536 448 380.7 367c-34.8 49-92 81-156.7 81C118 448 32 362 32 256c0-23.6 4.3-46.3 12.1-67.2zM80 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM224 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Whistle;