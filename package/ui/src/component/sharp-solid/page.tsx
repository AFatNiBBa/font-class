
import { Icon } from "../../index";

/**
 * A component that renders the `page` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page?s=sharp-solid page}
 * @preview ![page](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/page.svg)
 */
const Page: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 512H384V112L272 0H0V512z" />
    </Icon>
);

export default Page;