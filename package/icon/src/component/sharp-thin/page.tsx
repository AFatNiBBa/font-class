
import { Icon } from "../../index";

/**
 * A component that renders the `page` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page?s=sharp-thin page}
 * @preview ![page](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/page.svg)
 */
const Page: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 496l352 0 0-377.4L265.4 16 16 16l0 480zM272 0L384 112l0 384 0 16-16 0L16 512 0 512l0-16L0 16 0 0 16 0 272 0z" />
    </Icon>
);

export default Page;