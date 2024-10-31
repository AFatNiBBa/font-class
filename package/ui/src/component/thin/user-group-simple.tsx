
import { Icon } from "../../index";

/**
 * A component that renders the `user-group-simple` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group-simple?s=thin user-group-simple}
 * @preview ![user-group-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-group-simple.svg)
 */
const UserGroupSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M248 136A88 88 0 1 0 72 136a88 88 0 1 0 176 0zM56 136a104 104 0 1 1 208 0A104 104 0 1 1 56 136zm512 0a88 88 0 1 0 -176 0 88 88 0 1 0 176 0zm-192 0a104 104 0 1 1 208 0 104 104 0 1 1 -208 0zM128 304C66.1 304 16 354.1 16 416l0 16c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-16c0-61.9-50.1-112-112-112l-64 0zm0-16l64 0c48.2 0 90.2 26.6 112 66c9.2 16.6 14.8 35.4 15.8 55.4c.1 1.5 .1 3 .2 4.6c0 .7 0 1.3 0 2l0 16c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-16c0-70.7 57.3-128 128-128zM432 480c-31.2 0-59.9-11.2-82.1-29.8c1.4-5.8 2.1-11.9 2.1-18.2l0-1.6c20.3 20.7 48.7 33.6 80 33.6l80 0c61.9 0 112-50.1 112-112l0-16c0-17.7-14.3-32-32-32l-240 0c-13.2 0-24.6 8-29.5 19.5c-3.4-4.7-7-9.3-10.8-13.6c8.6-13.2 23.4-21.9 40.3-21.9l240 0c26.5 0 48 21.5 48 48l0 16c0 70.7-57.3 128-128 128l-80 0z" />
    </Icon>
);

export default UserGroupSimple;