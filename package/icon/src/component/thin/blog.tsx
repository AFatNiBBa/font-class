
import { Icon } from "../../index";

/**
 * A component that renders the `blog` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blog?s=thin blog}
 * @preview ![blog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/blog.svg)
 */
const Blog: typeof Icon = x => (
    <Icon {...x}>
        <path d="M200 32c-4.4 0-8 3.6-8 8s3.6 8 8 8c145.8 0 264 118.2 264 264c0 4.4 3.6 8 8 8s8-3.6 8-8C480 157.4 354.6 32 200 32zm0 96c-4.4 0-8 3.6-8 8s3.6 8 8 8c92.8 0 168 75.2 168 168c0 4.4 3.6 8 8 8s8-3.6 8-8c0-101.6-82.4-184-184-184zM16 104c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144l-8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l8 0c70.7 0 128 57.3 128 128s-57.3 128-128 128S16 438.7 16 368l0-264z" />
    </Icon>
);

export default Blog;