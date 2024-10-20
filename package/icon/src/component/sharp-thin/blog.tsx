
import { Icon } from "../../index";

/**
 * A component that renders the `blog` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blog?s=sharp-thin blog}
 * @preview ![blog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/blog.svg)
 */
const Blog: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 48c150.2 0 272 121.8 272 272l16 0C480 160.9 351.1 32 192 32l0 16zM384 320c0-106-86-192-192-192l0 16c97.2 0 176 78.8 176 176l16 0zM16 104l0-8L0 96l0 8L0 368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144l-8 0-8 0 0 16 8 0 8 0c70.7 0 128 57.3 128 128s-57.3 128-128 128S16 438.7 16 368l0-264z" />
    </Icon>
);

export default Blog;