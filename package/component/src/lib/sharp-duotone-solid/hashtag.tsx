
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hashtag` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hashtag?s=sharp-duotone-solid hashtag}
 * @preview ![hashtag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hashtag.svg)
 */
const Hashtag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M74.2 480c5.3-32 10.7-64 16-96l10.7-64c7.1-42.7 14.2-85.3 21.3-128l64.9 0c-7.1 42.7-14.2 85.3-21.3 128l-10.7 64c-5.3 32-10.7 64-16 96l-64.9 0zm58.7-352l16-96 64.9 0-16 96-64.9 0zM234.2 480l16-96 64.9 0-16 96-64.9 0zm26.7-160c7.1-42.7 14.2-85.3 21.3-128c3.6-21.3 7.1-42.7 10.7-64c5.3-32 10.7-64 16-96l64.9 0c-5.3 32-10.7 64-16 96l-10.7 64c-7.1 42.7-14.2 85.3-21.3 128l-64.9 0z" />
        <path d="M45.8 128l2.2 0 244.9 0-10.7 64L48 192l-12.9 0 10.7-64zM3.1 384l10.7-64 2.2 0 84.9 0L90.2 384 16 384 3.1 384zm399.1 0l-2.2 0-244.9 0 10.7-64L400 320l12.9 0-10.7 64zm42.7-256l-10.7 64-2.2 0-84.9 0 10.7-64 74.2 0 12.9 0z" />
    </Icon>
);

export default Hashtag;