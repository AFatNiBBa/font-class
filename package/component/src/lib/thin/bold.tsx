
import { Icon } from "../../index";

/**
 * A component that renders the `bold` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bold?s=thin bold}
 * @preview ![bold](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bold.svg)
 */
const Bold: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 40c0-4.4 3.6-8 8-8l32 0 32 0 152 0c61.9 0 112 50.1 112 112c0 43.1-24.4 80.5-60.1 99.3C328.7 255.8 368 303.3 368 360c0 66.3-53.7 120-120 120L72 480l-32 0L8 480c-4.4 0-8-3.6-8-8s3.6-8 8-8l24 0 0-216L32 48 8 48c-4.4 0-8-3.6-8-8zM48 464l24 0 176 0c57.4 0 104-46.6 104-104s-46.6-104-104-104l-24 0L48 256l0 208zm0-224l176 0c53 0 96-43 96-96s-43-96-96-96L72 48 48 48l0 192z" />
    </Icon>
);

export default Bold;