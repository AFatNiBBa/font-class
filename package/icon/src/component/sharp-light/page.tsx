
import { Icon } from "../../index";

/**
 * A component that renders the `page` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page?s=sharp-light page}
 * @preview ![page](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/page.svg)
 */
const Page: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 480l320 0 0-354.7L258.7 32 32 32l0 448zM272 0L384 112l0 368 0 32-32 0L32 512 0 512l0-32L0 32 0 0 32 0 272 0z" />
    </Icon>
);

export default Page;