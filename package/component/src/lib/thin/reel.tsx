
import { Icon } from "../../index";

/**
 * A component that renders the `reel` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reel?s=thin reel}
 * @preview ![reel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/reel.svg)
 */
const Reel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 8C0 3.6 3.6 0 8 0L72 0 376 0l64 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-56 0 0 80c0 4.4-3.6 8-8 8L72 104c-4.4 0-8-3.6-8-8l0-80L8 16c-4.4 0-8-3.6-8-8zm80 8l0 72 288 0 0-72L80 16zM64 160c0-4.4 3.6-8 8-8l304 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L72 168c-4.4 0-8-3.6-8-8zm0 64c0-4.4 3.6-8 8-8l368 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L72 232c-4.4 0-8-3.6-8-8zm0 64c0-4.4 3.6-8 8-8l304 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L72 296c-4.4 0-8-3.6-8-8zm0 64c0-4.4 3.6-8 8-8l304 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L72 360c-4.4 0-8-3.6-8-8zM8 512c-4.4 0-8-3.6-8-8s3.6-8 8-8l56 0 0-80c0-4.4 3.6-8 8-8l304 0c4.4 0 8 3.6 8 8l0 80 56 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-64 0L72 512 8 512zm72-88l0 72 288 0 0-72L80 424z" />
    </Icon>
);

export default Reel;