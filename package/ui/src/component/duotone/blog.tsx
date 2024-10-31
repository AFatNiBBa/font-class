
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blog` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blog?s=duotone blog}
 * @preview ![blog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/blog.svg)
 */
const Blog: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32z" />
        <path d="M48 96c26.5 0 48 21.5 48 48l0 224c0 26.5 21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48l-16 0 0-96 16 0c79.5 0 144 64.5 144 144s-64.5 144-144 144S0 447.5 0 368L0 144c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default Blog;