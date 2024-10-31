
import { Icon } from "../../index";

/**
 * A component that renders the `blog` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blog?s=regular blog}
 * @preview ![blog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/blog.svg)
 */
const Blog: typeof Icon = x => (
    <Icon {...x}>
        <path d="M216 0C379.5 0 512 132.5 512 296c0 13.3-10.7 24-24 24s-24-10.7-24-24C464 159 353 48 216 48c-13.3 0-24-10.7-24-24s10.7-24 24-24zM24 96c13.3 0 24 10.7 24 24l0 248c0 53 43 96 96 96s96-43 96-96s-43-96-96-96l-8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0c79.5 0 144 64.5 144 144s-64.5 144-144 144S0 447.5 0 368L0 120c0-13.3 10.7-24 24-24zm168 24c0-13.3 10.7-24 24-24c110.5 0 200 89.5 200 200c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-83.9-68.1-152-152-152c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Blog;