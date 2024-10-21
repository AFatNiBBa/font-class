
import { Icon } from "../../index";

/**
 * A component that renders the `snowman-head` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowman-head?s=regular snowman-head}
 * @preview ![snowman-head](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/snowman-head.svg)
 */
const SnowmanHead: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M336 144l0 48-224 0 0-48 224 0zM64 64l0 128-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l24.7 0C28 272.3 16 310.8 16 352c0 56 22.1 106.9 58.2 144.3C84.5 507 99.3 512 114.2 512l219.6 0c15 0 29.7-5 40.1-15.7C409.9 458.9 432 408 432 352c0-41.2-12-79.7-32.7-112l24.7 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-128c0-35.3-28.7-64-64-64L128 0C92.7 0 64 28.7 64 64zm0 288c0-43.6 17.4-83.1 45.7-112l2.3 0 224 0 2.3 0c28.3 28.9 45.7 68.4 45.7 112c0 43.1-17 82.1-44.7 110.9c-.1 .1-.3 .2-.8 .4c-.9 .4-2.5 .7-4.8 .7l-219.6 0c-2.2 0-3.8-.4-4.8-.7c-.4-.2-.7-.3-.8-.4C81 434.1 64 395.1 64 352zm88-16a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm168-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM219.3 445.2c.9 1.7 2.7 2.8 4.7 2.8s3.8-1.1 4.7-2.8l23.8-46.3c2.3-4.5 3.5-9.6 3.5-14.7c0-17.7-14.3-32.2-32-32.2s-32 14.5-32 32.2c0 5.1 1.2 10.2 3.5 14.7l23.8 46.3z" />
    </Icon>
);

export default SnowmanHead;