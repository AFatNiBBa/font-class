
import { Icon } from "../../index";

/**
 * A component that renders the `billboard` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/billboard?s=sharp-regular billboard}
 * @preview ![billboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/billboard.svg)
 */
const Billboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M440 24l0-24L392 0l0 24 0 8L248 32l0-8 0-24L200 0l0 24 0 8L80 32 32 32l0 48 0 272L0 352l0 48 32 0 48 0 216 0 0 88 0 24 48 0 0-24 0-88 216 0 48 0 32 0 0-48-32 0 0-272 0-48-48 0L440 32l0-8zM200 128l-8 0-24 0 0 48 24 0 32 0 32 0 24 0 0-48-24 0-8 0 0-48 144 0 0 48-8 0-24 0 0 48 24 0 32 0 32 0 24 0 0-48-24 0-8 0 0-48 120 0 0 272L80 352 80 80l120 0 0 48z" />
    </Icon>
);

export default Billboard;