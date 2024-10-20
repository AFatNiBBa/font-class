
import { Icon } from "../../index";

/**
 * A component that renders the `blog` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blog?s=sharp-regular blog}
 * @preview ![blog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/blog.svg)
 */
const Blog: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 320C512 143.3 368.7 0 192 0l0 48c150.2 0 272 121.8 272 272l48 0zm-96 0C416 196.3 315.7 96 192 96l0 48c97.2 0 176 78.8 176 176l48 0zM48 120l0-24L0 96l0 24L0 368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144l-8 0-24 0 0 48 24 0 8 0c53 0 96 43 96 96s-43 96-96 96s-96-43-96-96l0-248z" />
    </Icon>
);

export default Blog;