
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-fork` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-fork?s=duotone code-fork}
 * @preview ![code-fork](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/code-fork.svg)
 */
const CodeFork: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 153.3c4.9 2.1 10.1 3.8 15.4 4.9c2.7 .6 5.4 1 8.2 1.3c1.4 .1 2.8 .3 4.2 .3c1.4 .1 2.8 .1 4.2 .1c11.4 0 22.2-2.4 32-6.7l0 38.7c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-38.7c4.9 2.1 10.1 3.8 15.4 4.9c2.7 .6 5.4 1 8.2 1.3c1.4 .1 2.8 .3 4.2 .3c1.4 .1 2.8 .1 4.2 .1c11.4 0 22.2-2.4 32-6.7l0 38.7c0 53-43 96-96 96l-48 0 0 70.7c-4.9-2.1-10.1-3.8-15.4-4.9c-2.7-.6-5.4-1-8.2-1.3c-1.4-.1-2.8-.3-4.2-.3s-2.8-.1-4.2-.1c-11.4 0-22.2 2.4-32 6.7l0-70.7-48 0c-53 0-96-43-96-96l0-38.7z" />
        <path d="M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 104A80 80 0 1 0 80 0a80 80 0 1 0 0 160zM368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 104A80 80 0 1 0 368 0a80 80 0 1 0 0 160zM200 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default CodeFork;