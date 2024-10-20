
import { Icon } from "../../index";

/**
 * A component that renders the `page` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page?s=sharp-regular page}
 * @preview ![page](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/page.svg)
 */
const Page: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 464l288 0 0-332.1L252.1 48 48 48l0 416zM272 0L384 112l0 352 0 48-48 0L48 512 0 512l0-48L0 48 0 0 48 0 272 0z" />
    </Icon>
);

export default Page;