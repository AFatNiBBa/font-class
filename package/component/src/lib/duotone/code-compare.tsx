
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-compare` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-compare?s=duotone code-compare}
 * @preview ![code-compare](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/code-compare.svg)
 */
const CodeCompare: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 192l0 166.7c9.8-4.3 20.6-6.7 32-6.7c1.4 0 2.8 0 4.2 .1s2.8 .2 4.2 .3c2.8 .3 5.5 .7 8.2 1.3c5.4 1.1 10.5 2.8 15.4 4.9L112 192c0-35.3 28.7-64 64-64l16 0 0 40c0 9.5 5.6 18.1 14.2 21.9s18.8 2.3 25.8-4.1l80-72c5.1-4.6 7.9-11 7.9-17.8s-2.9-13.3-7.9-17.8l-80-72C227.6 2.1 221.8 0 216 0c-3.3 0-6.6 .7-9.8 2.1C197.6 5.9 192 14.5 192 24l0 40-16 0C105.3 64 48 121.3 48 192zM192 416c0 6.8 2.9 13.3 7.9 17.8l80 72c7 6.3 17.2 7.9 25.8 4.1s14.2-12.4 14.2-21.9l0-40 16 0c70.7 0 128-57.3 128-128l0-166.7c-9.8 4.3-20.6 6.7-32 6.7c-1.4 0-2.8 0-4.2-.1s-2.8-.2-4.2-.3c-2.8-.3-5.5-.7-8.2-1.3c-5.4-1.1-10.5-2.8-15.4-4.9L400 320c0 35.3-28.7 64-64 64l-16 0 0-40c0-9.5-5.6-18.1-14.2-21.9s-18.8-2.3-25.8 4.1l-80 72c-5.1 4.6-7.9 11-7.9 17.8z" />
        <path d="M408 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104 0A80 80 0 1 0 352 80a80 80 0 1 0 160 0zM104 432a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM0 432a80 80 0 1 0 160 0A80 80 0 1 0 0 432z" />
    </Icon>
);

export default CodeCompare;