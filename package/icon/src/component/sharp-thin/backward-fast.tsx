
import { Icon } from "../../index";

/**
 * A component that renders the `backward-fast` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-fast?s=sharp-thin backward-fast}
 * @preview ![backward-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/backward-fast.svg)
 */
const BackwardFast: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 64l0 8 0 172.7L256 75.3 272 64l0 19.6 0 149.8L496 75.3 512 64l0 19.6 0 344.8 0 19.6-16-11.3L272 278.6l0 149.8 0 19.6-16-11.3L16 267.3 16 440l0 8L0 448l0-8L0 256 0 72l0-8 16 0zM256 267.3l0-22.6 0-149.8L27.7 256 256 417.1l0-149.8zm16-8.3L496 417.1l0-322.2L272 253l0 6z" />
    </Icon>
);

export default BackwardFast;