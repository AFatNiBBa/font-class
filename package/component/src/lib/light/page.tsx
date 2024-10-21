
import { Icon } from "../../index";

/**
 * A component that renders the `page` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page?s=light page}
 * @preview ![page](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/page.svg)
 */
const Page: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 480l256 0c17.7 0 32-14.3 32-32l0-309.5c0-8.5-3.4-16.6-9.4-22.6L268.1 41.4c-6-6-14.1-9.4-22.6-9.4L64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32zm256 32L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L245.5 0c17 0 33.3 6.7 45.3 18.7l74.5 74.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default Page;