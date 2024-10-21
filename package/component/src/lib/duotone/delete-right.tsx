
import { Icon, generic } from "../../index";

/**
 * A component that renders the `delete-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/delete-right?s=duotone delete-right}
 * @preview ![delete-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/delete-right.svg)
 */
const DeleteRight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128C0 92.7 28.7 64 64 64l306.7 0c17 0 33.3 6.7 45.3 18.7L566.6 233.4c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6L416 429.3c-12 12-28.3 18.7-45.3 18.7L64 448c-35.3 0-64-28.7-64-64L0 128zM136.1 317.7c0 .4-.1 .8-.1 2.3c0 1.2 0 1.2 .1 2.4c0 0 .1 1.1 .3 2.2c.3 1.5 .7 3 1.3 4.4c1.2 2.9 2.9 5.6 5.3 7.9c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7c15.7-15.7 31.4-31.4 47-47l47 47c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7s7-10.8 7-17s-2.3-12.3-7-17c-15.7-15.7-31.4-31.4-47-47c15.7-15.7 31.4-31.4 47-47c9.4-9.4 9.4-24.6 0-33.9c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7c-15.7 15.7-31.4 31.4-47 47c-15.7-15.7-31.4-31.4-47-47c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7c-9.4 9.4-9.4 24.6 0 33.9c15.7 15.7 31.4 31.4 47 47c-15.7 15.7-31.4 31.4-47 47c-2.3 2.3-4.1 5.1-5.3 7.9c-.6 1.4-1 2.9-1.3 4.4c-.1 .8-.3 1.5-.3 2.3z" />
        <path d="M177 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47z" />
    </Icon>
);

export default DeleteRight;