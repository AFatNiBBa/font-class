
import { Icon } from "../../index";

/**
 * A component that renders the `blog` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blog?s=sharp-light blog}
 * @preview ![blog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/blog.svg)
 */
const Blog: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 64c141.4 0 256 114.6 256 256l32 0C480 160.9 351.1 32 192 32l0 32zM384 320c0-106-86-192-192-192l0 32c88.4 0 160 71.6 160 160l32 0zM32 120l0-16L0 104l0 16L0 368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144l-8 0-16 0 0 32 16 0 8 0c61.9 0 112 50.1 112 112s-50.1 112-112 112S32 429.9 32 368l0-248z" />
    </Icon>
);

export default Blog;